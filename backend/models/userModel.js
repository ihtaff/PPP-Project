const mongoose = require('mongoose')
const bcrypt=require("bcryptjs");

const { stringify } = require('querystring');

const UserSchema= mongoose.Schema(
    
    {
    name:{ 
        type:String, 
        required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    date: {type:Date,
        defaut:Date.now}

},
{
    collection: 'posts',
    autoIndex: false
  },
  { typeKey: '$type' }
)


UserSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
     
        const salt= await bcrypt.genSalt(10);
      
        this.password=await bcrypt.hash("password="+this.password,salt);
    
})
UserSchema.methods.matchPassword= async function(enteredpassword){
    var a= stringify(enteredpassword)
    return await bcrypt.compare(a,this.password)
}
const post=mongoose.model('post',UserSchema)
module.exports=post