

const userMid= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid")
    let  available = req.headers?.isfreeappuser
    if(!available){
        res.send({staus: false , msg : "enter header first"})
    }else{
        if(available === "true")
        req['isFreeAppUser'] = true
        if(available === "false")
        req['isFreeAppUser'] = false
        
        next()
    }
    }


module.exports.userMid= userMid
