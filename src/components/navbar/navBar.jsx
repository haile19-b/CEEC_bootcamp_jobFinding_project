import './navBar.css';
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

import React from 'react'

function Navbar({hndl_location_change,handle_search}) {
  return (
    <div id='comp_1'>
        <nav>
        <div id="logo"><img src="https://s3-alpha-sig.figma.com/img/9533/58bd/8fcfa53cf99bf9ff2ab7efd0b2189fa1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J4oc1e2YSKuxm69BqncxAxxAZnK9n-Br3AzhVyL363ODcikaF5cDtQWAuWuNS4QrJd6yv~bni1LkgDclIg4n7ZPahcdw9hsQdGre0abKUIvKLXfq32IN-mLVbDHdVf873zCM1il5vinRmkVFrBKpvHl61IjWyDh2aXz~0H8FfzX6hZCIvAv3lGRggFj8FduU71RVs-pWz7evlwTIkpS3HVkp9LwNP896~a483Rabcx9USsY7WAsEDSKuHMkuWvyWgO27E2Stk13Sxt-O0jhvW5ZFe0~RDE0HTX~g4M-Hi4ZhWUxDuqOs65Rz50QT-nNVQ43CIpiYxVkPxKjgz3ys0Q__" /></div>
        <ul>
           <Link to={'/'}> <li>Job Search</li></Link>
           <Link to={'/job_post'}> <li>Job Post</li></Link>
           <Link to={'/application'}> <li>My Application</li></Link>
           <Link to={'/company'}> <li>Companies</li></Link>
           <Link to={'/contact'}> <li>Conatact Us</li></Link>
        </ul>
        <div id="inter_method">
            <button className='btns' id='login'>Login</button>
            <button className='btns' id='sign'>Sign In</button>
        </div>
    </nav>

    <div id='search'>
        <div className="texts"><FaSearch  className='w-10 h-10'/>
        <input type="text" placeholder='Jop title,Keywords, or Company name' onChange={handle_search}/> <hr className='w-10 rotate-90'/>
        <div className='flex justify-center align-middle gap-0 '><CiLocationOn className='w-5 h-5'/> <input id='location' type="text" placeholder='Location' onChange={hndl_location_change} /></div>
        </div>
        <button>search</button>
    </div>
    </div>
  )
}

export default Navbar
