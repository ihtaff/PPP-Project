var SerialPort=require("serialport");
const parsers=SerialPort.parsers;
const Readline = SerialPort.parsers.Readline;
const mongoose=require("mongoose");
const mongo = require('mongodb');
const User1=require("./models/descripModel");
const client = new mongo.MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db;
var mytables;
client.connect(() => {
  db = client.db('node');
  mytables = db.collection('mytables');
});



const parser = new Readline();
const express=require("express");
const { jsonp } = require("express/lib/response");




var port =new SerialPort('COM4',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
port.pipe(parser); 
port.on("open",(stream) => {
      console.log('someone connected!');
   
  });
 var i=1;
parser.on('data', data =>{ 
  console.log(data);
 
      i++;

   
 client.connect(() => {
        db = client.db('node');
        mytables = db.collection('mytables');
        notification = db.collection('notification');
      });
     
      if(i==2){
      mytables.updateOne({"_id":"2"},{$set: { "_id":"2","Temperature" : data,"date":new Date()}},function(err,res){
         
         if(data>=21){
          notification.insertOne({"Notification":`the temperature is ${data}°C at`, "date":new Date()})

         }
      });     
}
if(i==3){
    mytables.updateOne({"_id":"2"},{$set: { "_id":"2","Humidity" : data,"date":new Date()}},function(err,res){
     
       if(data>=90){
        notification.insertOne({"Notification":`the humidity was ${data}% at`, "date":new Date()})

       }
    });     
}
if(i==4){
  mytables.updateOne({"_id":"2"},{$set: { "_id":"2","Presence" : data,"date":new Date()}},function(err,res){
 
     i=1;
     if(data==1){
      notification.insertOne({"Notification":"a presence was detected at", "date":new Date()})

     }
  });     
}  


})
