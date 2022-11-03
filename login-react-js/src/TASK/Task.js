import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import './Task.css'
// function Addtask(){}

const Task = () => {
const [tex,settext]=useState("");
const [userdes,setdes]=useState("");
const [task,addTask]=useState([]);


  const handleusertext=(val)=>{
    settext(val.target.value);
  }

const handleuserdescription=(val)=>{
  setdes(val.target.value);
}

  const handlesum=(val)=>{
    val.preventDefault();

    const temp={
      tex,
      userdes,
    };
    addTask([...task,temp]);
   
   
  };
  return (
    <div className='task'>
        <h1>Task</h1>
      
          <form>
        <input value={tex} type="text" onChange={handleusertext}></input>
        <textarea value={userdes} type="message" onChange={handleuserdescription}></textarea>
        <button onClick={(val)=>handlesum(val)}>submit</button>
        </form>
    {task?.map((item,index)=>
      <h2 key={index}>{item.tex} <br></br>{item.userdes}</h2>

      
    )
    
    }
    </div>
  )
}

export default Task