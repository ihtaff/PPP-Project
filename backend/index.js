const express=require("express")
const app=express()
const userRoutes=require("./routes/userRoutes")
const cors=require("cors")
const mongoose=require("mongoose")
const User=require("./models/userModel");
const User1=require("./models/descripModel");
const User2=require("./models/notifModel");
const router=express.Router();

mongoose.connect("mongodb://localhost:27017/node",console.log("connected"))
app.use(cors())
app.use(express.json())
app.get('/data',(req,res)=>{
    User1.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{console.log(err)})
})
app.get('/notif',(req,res)=>{
    User2.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{console.log(err)})
})

app.use("/api/users",userRoutes)
app.delete('/delete/:id', function(req, res,next){
    console.log(req.params.id);
    
    User1.remove({_id:req.params.id}).then((result)=>{
        res.status(200).json({
            message:'deleted successfuly',
            result:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    });


app.listen("5001", console.log("server is runnig on port 5001"))
module.exports=router;