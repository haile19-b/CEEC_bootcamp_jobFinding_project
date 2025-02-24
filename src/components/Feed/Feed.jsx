import './Feed.css'
 import React, { useState } from 'react'
import Jobs from './Jobs'
 
 const Feed = ({location,manualInput,search,jo,setJo,savedjo,setSavedjo,handle_clicked}) => {


   return (
     <div className='jops w-[628px] h-[839px]' >
       {
        jo.filter((item) =>{
        if (location !== ""){
          return item.location.toLowerCase().includes(location)
        }
        if (search !== "" ) {
          return item.company.toLowerCase().includes(search) || item.title.toLowerCase().includes(search) ||item.description.toLowerCase().includes(search) || item.type.toLowerCase().includes(search)
        }
        if (manualInput.from !== 0 || manualInput.to !== ""){
          return Number(item.salary.replace(/[$,]/g, "")) >= manualInput.from && Number(item.salary.replace(/[$,]/g, "")) <= manualInput.to;
        }
        }).map((obj,index)=>
          <Jobs key = {index} type = {obj.type} salary = {obj.salary} location = {obj.location} description = {obj.description} logo = {obj.logo} id = {obj.id} title = {obj.title} company = {obj.company} isBookMarked = {obj.isBookMarked} handle_clicked = {handle_clicked} />
        )
       }
     </div>
   )
 }
 
 export default Feed
 