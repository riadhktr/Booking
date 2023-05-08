import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCookie } from '../helpers/cookies';
import NavbarUser from '../components/Navbar';

const Booking = () => {
  
    const {id} = useParams()
   const [quantity,setQuantity] = useState()
   const [categorie,setCategorie] = useState('');
   const [event,setEvent]=useState([])
   console.log(event);
   const token = getCookie('token')
    const eventWithId = async()=>{
        await axios.get(`http://localhost:4000/api/event/${id}`,{headers:{
            "Authorization":token
        }}).then((res)=>{
            setEvent(res.data.event);
        }).catch((err)=>{
            console.log(err);
        })
    }
    // const singleEvent = events.find((el)=>el._id === id)
    // console.log(singleEvent.normalTickets);

    const bookTickets = async()=>{
        await axios.post(`http://localhost:4000/api/tickets/${id}`,{quantity:quantity,categorie:categorie},{headers:{
            "Authorization":token
        }}).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
     eventWithId()
    },[])
  return (
    <>
    <NavbarUser/>
    <div>
        
         {event.map((item,index)=>{
            return(
                <div key={index}>
                <h1>{item.eventName}</h1>
               Vip Tickets: <h2>{item.VipTickets.qty}</h2>
               Normal Tickets: <h2>{item.normalTickets.qty}</h2>
                
                </div>
            )
         })}
        <input type='number' onChange={(e)=>setQuantity(Number(e.target.value))}/>
        <div>
        <select onChange={(e)=>setCategorie(e.target.value)}>
            <option></option>
            <option>vip</option>
            <option>normal</option>
        </select>
        </div>
        <button onClick={()=>bookTickets()}>reserver</button>
    </div>
    </>
  )
}

export default Booking
