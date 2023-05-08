import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setEvent } from '../../app/eventSlice'
import { useNavigate } from 'react-router-dom'
import EventCard from './EventCard'

const CardList = () => {
    const events = useSelector((state)=>state.events);
    console.log('events',events);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const listEvents = async()=>{
         await axios.get('http://localhost:4000/api/events')
        .then((res)=>{
           dispatch(setEvent((res.data.events))) ;
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        listEvents()
    },[])
  return (
    <>
    
    <div style={{border:"1px solid red",display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
   {events.map((item,index)=>{
    return(
        <div  key={index}>
         
            <EventCard event={item}/>
        </div>
    )
   })}
    </div>
    </>
  )
}

export default CardList