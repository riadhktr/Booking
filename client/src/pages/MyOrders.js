import React, { useEffect } from 'react'
import Card from '../components/evnts/Ticketcard'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { getCookie } from '../helpers/cookies';
import { setTickets } from '../app/ticketSlice';
import NavbarUser from '../components/Navbar';
import TicketCard from '../components/evnts/Ticketcard';

const MyOrders = () => {
    const myTickets = useSelector(state=>state.tickets);
    console.log(myTickets);
    const dispatch = useDispatch();
    const token = getCookie('token')
    const getTickets = async()=>{
        await axios.get('http://localhost:4000/api/MyTickets',{headers:{
            Authorization:token
        }}).then((res)=>{
            dispatch(setTickets(res.data.tickets));
        }).catch((err)=>{
            console.log(err);
        })

    }

    useEffect(()=>{
getTickets()
    },[])
  return (
    <>
    <NavbarUser/>
    <div>
        {myTickets.map((item,index)=>{
            return(
           <TicketCard ticket={item} key={index}/>
            )
        })}
        
    </div>
    </>
  )
}

export default MyOrders