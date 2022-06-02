const getBatchInfo = function(){
    console.log('RADON W3D3 the topic being tought today is Nodejs module system')
}
const date=function(){
    let date1= new Date();
    console.log(date1.getDate())
}

const month=function(){
    //const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let date1= new Date()
    console.log(date1.getMonth())
}


module.exports.getBatchInfo = getBatchInfo
module.exports.date=date
module.exports.month=month
