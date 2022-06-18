//@ts-check
const jwt = require("jsonwebtoken");
const { authmid } = require("../middlewares/auth");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try{
    let data = abcd.body;
    if(Object.keys(data).length == 0) return xyz.status(400).send({status: false, msg: 'User details is required to create account'})
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
     xyz.status(201).send({ msg: savedData });
  }
   catch(err){
    xyz.status(500).send({status: false, msg: err.message})
    }

   
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  
  console.log(user);
  
  if (!user)
    return res.status(401).send({
      status: false,
      msg: "username or the password is not corerct",
    });
 

 // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon" //this is secrate key
  );
  res.setHeader("x-auth-token", token);

  res.status(201).send({ status: true, data: token });
} catch(error){
  res.status(500).send({status: false, msg: res.message})
}};


//get userData

const getUserData = async function (req, res) {
 
  try{
  let userId = req.params.userId;
  let message = req.body.message;

  
  let userDetails = await userModel.findById(userId);
  let posting = userDetails.post
  posting.push(message);

  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}catch(error){
  res.status(500).send({status: false, msg: res.message})
}}



//3rd
const updateUser = async function (req, res) {
  //comments
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases

  // user ne id bheji he vo
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.status(200).send({ status: "updatedUser", data: updatedUser });
}catch(error){
  res.status(500).send({status: false, msg: res.message})
} 
};

//update key isDeleted to true
const deleteData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let getData = req.body; 
  console.log(getData);
  let updateKey = await userModel.findOneAndUpdate({ _id: userId }, getData,{$set:{isDeleted:true}}); // getData gives me object Id
  res.status(200).send({ status: "updatedKey", msg: updateKey });
  }catch(err){
    res.status(500).send({status: false, msg: res.message})
  }
};

// module.exports.createUser = createUser;
// module.exports.getUserData = getUserData;
// module.exports.updateUser = updateUser;
// module.exports.loginUser = loginUser;
// module.exports.deleteData = deleteData;
module.exports = { createUser, getUserData, updateUser, loginUser, deleteData };
