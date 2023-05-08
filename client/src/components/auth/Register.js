import React, { useState } from 'react';
import axios from "axios";

const Register = () => {
    const [values,setValues] = useState({name:"",email:"",password:""});

    const handelSubmit =async(event)=>{
        // event.preventDefault()
        await axios.post("http://localhost:4000/api/register",{...values}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }
  return (
    <div>
        <h1>Register Page</h1>
        <div>
            <input type="text" placeholder='name'  name="name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <input type="email" placeholder='email@agag.com' name="email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <input type="password" placeholder='password' name="password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <button onClick={()=>handelSubmit()}> Rgister</button>

        </div>
    </div>
  )
}

export default Register