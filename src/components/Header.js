import React, { useState } from 'react'
import { NavLink, redirect } from 'react-router-dom'
import Search from '../pages/search/Search';

const Header = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div className='bg-black text-white flex justify-between px-4 py-3 items-baseline sticky top-0 z-20'>

      <div className='space-y-2'>
        <NavLink to='/' replace><h1 className='text-2xl'>Web Tail</h1></NavLink>
        {show && <nav className='space-y-2  flex-col hidden sm:flex '>
          <NavLink className="hover:bg-white hover:text-black hover:px-4 hover:py-1">About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Crud</NavLink>
        </nav>}
      </div>


      <div className='hidden sm:flex'>
        <button onClick={toggle} className='text-white '>
          {show ? <i className="fa-solid fa-xmark fa-xl"></i> : <i className="fa-solid fa-bars fa-xl"></i>} </button>
      </div>


      <nav className='space-x-6 sm:hidden flex items-baseline'>
        <NavLink to='/movie/popular' className="hover:bg-white hover:text-black hover:px-4 hover:py-1">Popular</NavLink>
        <NavLink to='/movie/top_rated' className="hover:bg-white hover:text-black hover:px-4 hover:py-1">TopRated</NavLink>
        <NavLink to='/movie/upcoming' className="hover:bg-white hover:text-black hover:px-4 hover:py-1">Upcoming</NavLink>
        <Search />
      </nav>


    </div>
  )
}

export default Header