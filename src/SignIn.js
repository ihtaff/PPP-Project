import React, {useState} from 'react';
import Component from './Component';
import { Routes, Route, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './App.css'

function Sign() {
  
   
    const [error,setError]=useState("")
    const [user,setUser]=useState({name:"",eamil:""})
    
    const Login=details=>{
      console.log(details)
      if(details){
        setUser({name:details.name,
          email:details.password})
          console.log("logged in")
     }else{
       console.log("details does not match")
       setError("details does not match")
     }
    }
    const logout=()=>{
      setUser({name:"",eamil:""})
    }
    const navigate = useNavigate();
  return (
    
    <div className='a'>
      
      {(user.name!="")?(
       
         <div className="Component">
          
        <div className='buttons'>
       
      <button >View reminders</button>
      <button >Delete reminder</button>
      <button >add reminder</button>
      <button onClick={logout}>logout</button></div>
 
        </div>
        
      
):(
  <Component Login={Login} Error={error} />
)
      }
      
    </div>
  );
}

export default Sign;