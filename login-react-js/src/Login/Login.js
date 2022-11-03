import { useState } from 'react'
import "./Login.css"
import key from './personal.json'
import {useNavigate} from "react-router-dom";


const Login = () => {

const [username,setUsername]=useState('');
const [userpwd,setPwd]=useState('');
// const [error,setError]=useState('');
const Navigate=useNavigate()

const handleUserName=(ev)=>{

setUsername(ev.target.value);
console.log("ev",ev);
};

const handleUserPwd=(ev)=>{
    setPwd(ev.target.value);
};



const handlesubmit=(ev)=>{


    key.map((item)=>{
        if(item.username===username && item.password==userpwd){
          return  Navigate("home")
        }
       
        console.log(item.name)
        console.log(item.password)
    })
     



ev.preventDefault();


if(username===""||userpwd===""){
alert("invalid");
return;
}
console.log('state',username,userpwd);
};


  return (
   <div className='flex'>
    <div className='container'>
        <h2>forms</h2>
        <form>
            <input value={username} placeholder="Username" onChange={handleUserName}/>
            <input value={userpwd} type="password" placeholder='password' onChange={handleUserPwd}/>
            <button onClick={(ev)=>handlesubmit(ev)}>Submit</button>
          
        </form>

    </div>
   </div>
  )
}

export default Login