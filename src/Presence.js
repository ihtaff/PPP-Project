import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function Presence(){
const [reminders,setReminders]=useState("");
useEffect(()=>{
    axios.get("http://localhost:5001/data").then((res)=>{
        const response=res.data;
    setReminders(response);
});
    
},[])
const [pre,setpre]=useState("No presence detected");
return(
    <div className='a'>
       
        {reminders && reminders.map((data)=>{
            const {Temperature, Humidity, Presence,date}=data
            
            if(Presence==1){
                setpre("a presence is detected")
            }

            return(
                <>
                <div className='div'><h1 id='color'>🧍 Reminder</h1><br></br>
                <h1>-Actual presence:</h1><h1 id='color'>{pre} </h1><br></br>
                <h1>-The last update of this value was in:</h1><h1 id='color'>{date}</h1><br></br>
                

                </div>
                </>
            )
        })}
    </div>
)
}
export default Presence;