import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function Humidity(){
const [reminders,setReminders]=useState("");
useEffect(()=>{
    axios.get("http://localhost:5001/notif").then((res)=>{
        const response=res.data;
    setReminders(response);
});
    
},[])

return(
    <div className='a'>
       
        {reminders && reminders.map((data)=>{
            const {Notification, date}=data
            return(
                <div className='div'>
               <h1 >{Notification}:</h1><br></br>
               <h2 id='color'>{date}</h2>
                

                </div>
            )
        })}
    </div>
)
}
export default Humidity;