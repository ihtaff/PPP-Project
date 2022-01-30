import './Component.css'
import React, {useState} from 'react';

import axios from 'axios';



function Component1({Login, error}) {
    //const [details,setdetails]=useState({email:"",password:""})
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setpassword]=useState("")
const [loading,setloading]=useState(false)
const [details,setdetails]=useState({name:"",email:"",password:""})
    const submithandler=e=>{
        console.log(email,password)
        e.preventDefault();
        try{
            const config= {
                headers :{
            "Content-type":"application/json"
        }
        }
        setloading(true)
        const data = axios.post("http://localhost:5001/api/users/login",
            {email,
            password
            }
        ,
        config
        );
        data.then((data)=>{
            console.log(data.data)
            Login(data.data)
        })
        localStorage.setItem("userinfo",JSON.stringify(data))
        setloading(false)
        }catch(err){
console.error("ok err");
        }
    }
   
    

    return (
        <a className='a'>
      <div id='container' className='container'>
          
  
        <form action='#' onSubmit={submithandler}>
    
        <h1>LOGIN</h1>
        {(error!="")?(<div className='erreur'>{error}</div>):""}
        
        
      <input type="text"  text="email" id="email" placeholder='email' onChange={e=>setEmail({email:e.target.value})} />
    <input type="password" text="password" id="password" placeholder='Password' onChange={e=>setpassword({password:e.target.value})} />
    <input type="submit" className='c' value="SignUp"/>
      
    </form>

    
    </div></a>
    );
  }
  
  export default Component1;