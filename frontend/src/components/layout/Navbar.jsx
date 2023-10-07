import React from 'react'
import { FaBars, FaRegBell, FaCircleUser } from "react-icons/fa6";
import logo from '../../assets/bonanza.svg'

export default function Navbar() {
  return (
    <nav className='nav-box'>
      <button>
        <FaBars/>
      </button>
      <img src={logo} alt="Bonanza" />
      <div className='box-user'>
        <button><FaRegBell/></button>
        <button><FaCircleUser/></button>
      </div>
    </nav>
  )
}
