import React, {useState} from 'react';
import Component1 from './Component1';
import { Routes, Route, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cards from './components/Cards'
import './App.css'
import Reminder from './Reminder';
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
       <Reminder />
        
      
):(
  <Component1 Login={Login} Error={error} />
)
      }
      
    </div>
  );
}

export default Sign;