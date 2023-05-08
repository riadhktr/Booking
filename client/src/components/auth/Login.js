import React, { useState } from 'react'
import axios from "axios"

import { isAuthenticated, setAuthentification } from '../../helpers/auth';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/authSlice';
const Login = () => {
    const [values,setValues] = useState({email:"",password:""});
    const navigate = useNavigate();
    const handelSubmit =async()=>{
        // event.preventDefault()
        await axios.post("http://localhost:4000/api/login",{...values}).then((res)=>{
            console.log(res)
            setAuthentification(res.data.found,res.data.token);
            // setUser(res.data.found)
            console.log(isAuthenticated().role);
            if(isAuthenticated()&& isAuthenticated().role ==="admin"){
            navigate('/admin')
            }else{
                navigate('/user')
            }
        }).catch((err)=>{
            console.log(err)
        })

    }
  return (
    <div style={{display:"flex", border:"1px solid red"}}>
        {/* <div>
        <img src="/pic.png" alt="image" />
        </div> */}
        
        <div>
        <h1>Login Page</h1>
        <div>
           
            <input type="email" placeholder='email@agag.com' name="email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <input type="password" placeholder='password' name="password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} />
            <button onClick={()=>handelSubmit()} > Login</button>

        </div>
        </div>
        
    </div>
  )
}

export default Login

