const asychandler=require("express-async-handler")
const req = require("express/lib/request");
const { stringify } = require("querystring");
const User=require("../models/userModel");
const User1=require("../models/descripModel");

const registerUser= asychandler(async(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
console.log(name)
    const userexists=await User.findOne({email});
    if(userexists){
        res.status(400)
        throw new Error("user already exists")
    }else{
        const user= await User.create({
            name,
            email,
            password
        });
        
        if(user){
            res.status(200).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                password:user.password
            })
        }else{
            res.status(400)
            throw new Error("error occured");
        }

    }
})
const authUser= asychandler(async(req,res)=>{

    const { email, password }= req.body;


console.log(password)
    const user=await User.findOne(email);
    if(user && (await user.matchPassword(password))){
        
        console.log(user.name)
      
            
           res.json(
               { _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password,}
            )
        

    }else{
        res.status(400)
        throw new Error("invalid email or pass")
       
    }

    
})

module.exports={registerUser, authUser}