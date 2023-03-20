const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/User");
const {jwtAuthentication} = require("../middleware/index")




const login = async (req,res)=>{
    const candidate = await User.findOne({email:req.body.email})
    if(candidate){
        const password = await bcrypt.compare(req.body.password, candidate.password)
        if(password){
            const accessToken = jwtAuthentication({
                email:candidate.email,
                userId:candidate._id
            })
            console.log(accessToken);
        }else{
         res.status(401).json({
            message: "user unauthorized "
         })
        }
    }else{
        res.status(404).json({
            message:"user not"
        })
    }
}

const register =async (req,res)=>{
    const candidate = await User.findOne({email:req.body.email})
    if(candidate){
        res.status(409).json({
            message:"Such an email already exists"
        })
    }else{
        const hashPassword = await bcrypt.hash(req.body.password,8)
        const user =new User({
            email:req.body.email,
            password: hashPassword
        })
        
      try{
       await user.save()
       res.status(201).json(user)
      }catch(e){
        console.log(e);
      }
    }
}

module.exports= {
    login,
    register
}