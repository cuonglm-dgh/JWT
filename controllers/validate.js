const jwt = require('jsonwebtoken')
module.exports.getToken = (req,res,next) => {
    try{
        if(req.headers && req.headers.authorization)
        {
            let format = req.headers.authorization.split(" ")
            if(format[0] !== "Bearer") return res.send('Invalid token')
            let validator = jwt.verify(format[1],'cuong')
            next()
        }else res.send('Missing token')
    }catch(e){
        res.send(e)
    }
}