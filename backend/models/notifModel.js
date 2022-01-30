const mongoose = require('mongoose')

const UserSchema2= mongoose.Schema(
    
    {
    Temperature:{ 
        type:String, 
        required:true},
    Humidity:{ 
            type:String, 
            required:true},
    Presence:{
        type:String, 
            required:true
    },
    
    date: {type:Date,
        defaut:Date.now}

},
{
    collection: 'notification',
    autoIndex: false
  },
  { typeKey: '$type' }
)
const notification=mongoose.model('notification',UserSchema2)
module.exports=notification