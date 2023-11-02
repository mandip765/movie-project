import React, { useState } from 'react'
import { NavLink, redirect } from 'react-router-dom'

const Header = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <div className='bg-black text-white flex justify-between px-4 py-3 items-baseline'>

      <div className='space-y-2'>
        <h1 className='text-2xl'><button>Web Tail</button></h1>
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


      <nav className='space-x-6 sm:hidden'>
        <NavLink to='/About' className="hover:bg-white hover:text-black hover:px-4 hover:py-1 hover:rounded-sm">About</NavLink >
        <NavLink to='/Contacts' className="hover:bg-white hover:text-black hover:px-4 hover:py-1 hover:rounded-sm">Contacts</NavLink>
        <NavLink to='/Crud' className="hover:bg-white hover:text-black hover:px-4 hover:py-1 hover:rounded-sm">Crud</NavLink>
        <NavLink to='/NewPage' className="hover:bg-white hover:text-black hover:px-4 hover:py-1 hover:rounded-sm">NewPage</NavLink>
      </nav>

    </div>
  )
}

export default Header