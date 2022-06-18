//@ts-check

const jwt = require("jsonwebtoken");



const authmid = function (req, res, next) {

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-radon");
  console.log(decodedToken);
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  // @ts-ignore
  let decoded = decodedToken.userId;
  if (userId != decoded) {
    return res.send("user is not authorize to change");
  } 
  next();
   };

const authorization = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-radon");
  console.log(decodedToken);
  if (!decodedToken)
    return res.status(403).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
    // @ts-ignore
  let decoded = decodedToken.userId;
  if (userId != decoded) {
    return res.status(403).send("user is not authorize to change");
  }

  next();
};

module.exports.authmid = authmid;
module.exports.authorization = authorization;
