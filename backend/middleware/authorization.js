const jwt = require('jsonwebtoken')

module.exports = {

    authorize : (req, res, next) => {
        const token = req.header("Authorization")

        if(!token){
            return res.status(401).send("Access Denied")
        }else{
            const tokenBody = token.slice(7)

            jwt.verify(tokenBody, 'secretKey' , (err, decoded) => {
                if(err)
                {
                    console.log("JWT error: ", err)
                    return res.status(401).send("Access Denied")
                }
                next()
            })
        }
    }
}