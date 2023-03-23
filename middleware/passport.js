const passport = require("passport");
const mongoose = require("mongoose").model("users")



const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;


const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.ACCESS_TOKEN_SECRET
}

module.exports = passport =>{
    passport.use(
        new jwtStrategy(options, async(payload,done)=>{
            try {
                const user = await User.findById(payload.userId).select("email id")
                if(user){
                    done(null,user)
                }else{
                    dane(null,false)
                }
            } catch (error) {
                console.log(error);
            }
        })
    )
}