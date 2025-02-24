import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navBar'

function Layout({handle_search,hndl_location_change}) {
  return (
    <div>
      <div className='sticky top-0'>
      <Navbar handle_search = {handle_search} hndl_location_change = {hndl_location_change} />
      </div>
      <Outlet/>

    </div>
  )
}

export default Layout
