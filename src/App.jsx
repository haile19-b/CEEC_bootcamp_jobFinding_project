
import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './components/navbar/navBar'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Application from './pages/Application'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Layout from './layout'
import JobPost from './pages/JobPost'
import JobPost2 from './pages/JobPost2'
import JobPost3 from './pages/JobsPost3'
import DescriptionPage from './pages/DescriptionPage'

function App() {
  const [jo,setJo] = useState([])
  const [page,setPage] = useState(1)
  const [search,setSearch] = useState("")
  const [manualInput, setManualInput] = useState({ from: 0, to: Infinity });
  const [location,setLocation] = useState("")
  const [description,setDescription] = useState(false)

  const handleDes_page = ()=>{
    setDescription(des => !des)
  }

  const handle_search = (event)=>{
    setSearch((event.target.value).toLowerCase())
  }
  const hndl_location_change = (event)=>{
    setLocation(event.target.value)
  }

  const handle_page = (sign)=>{
    console.log(sign)
    if (sign == "-" && page > 1){
      setPage(page-1)
      return true
    }
    if (sign == "1"){
      setPage(1)
      return true
    }
    if (sign == "2"){
      setPage(2)
      return true
    }
    if (sign == "3"){
      setPage(3)
      return true
    }
    if (sign == "+"){
      setPage(page+1)
      return true
    }
  }
  // api/jobs/fdsvczx
  useEffect(()=>{
    fetch(`https://joblisting-3hjv.onrender.com/api/jobs?page=${page}&limit=500`)
    .then((res)=>res.json())
    .then((data)=>{
      setJo([...data.jobs])
    })
  },[page])

  if(!jo){
    return <p>Loading...</p>
  }
  const handle_clicked = (id,e)=>{
    e.stopPropagation()
    const updated_jo = jo.map(obj=> obj.id === id ? {...obj, isBookMarked: !obj.isBookMarked}:obj )
    setJo(updated_jo)
  
  }
  
  const [savedjo, setSavedjo] = useState([]);
  useEffect(() => {
    setSavedjo(jo.filter(obj => obj.isBookMarked == true));
  }, [jo]);

  return (
    <div>
  <DescriptionPage handleDes_page = {handleDes_page} description = {description} />
    <div>
    <Routes>
      <Route path='/' element={<Layout handle_search = {handle_search} hndl_location_change = {hndl_location_change} />}>

        <Route path='/' element = {<Home handleDes_page = {handleDes_page} handle_page = {handle_page} location = {location} handle_clicked = {handle_clicked} savedjo = {savedjo} setSavedjo = {setSavedjo} search = {search} jo = {jo} setJo = {setJo} setManualInput = {setManualInput} manualInput = {manualInput} />} />
        <Route path='/application' element = {<Application/>} />
        <Route path='/company' element = {<Company/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/job_post' element = {<JobPost/>} />
        <Route path='/job-post' element = {<JobPost2/>} />
        <Route path='/job post' element = {<JobPost3/>} />
      </Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
