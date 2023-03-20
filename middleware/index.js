const jwt = require('jsonwebtoken');

function jwtAuthentication(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '35m' })

 } 

 module.exports ={
    jwtAuthentication
 }

