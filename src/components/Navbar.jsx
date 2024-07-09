import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='flex justify-between bg-purple-600 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-10'>TASK.Dev</span>
        </div>
        <ul className='flex gap-10 mx-10'>
            <NavLink to="/"><li className='cursor-pointer hover:font-bold transition-all'><b>Home</b></li></NavLink>
            <NavLink to="/about"><li className='cursor-pointer hover:font-bold transition-all'><b>About</b></li></NavLink>
            <NavLink to="/contact"><li className='cursor-pointer hover:font-bold transition-all'><b>Contact Us</b></li></NavLink>
        </ul>
      </nav>
  )
}

export default Navbar
