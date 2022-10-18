import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoGrid, IoWalletOutline, IoPerson, IoPower} from 'react-icons/io5'

import { useUserContext } from '../context/userContext'

import '../../styles/navbar.css'
import logo from '../../assets/images/Logo-bg-white.png'

const Navbar = () => {

  const navigate = useNavigate()
  const { logOut } = useUserContext()
  
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' />
      <ul className='nav-list'>
        <li className='item'>
          <Link to='/dashboard'>
            <IoGrid className='icon'/>
          </Link> 
        </li>

        <li className='item'>
          <Link to='/wallet'> 
            <IoWalletOutline className='icon'/>
          </Link> 
        </li>
        
        <li className='item'>
          <Link to='/profile'>
            <IoPerson className='icon'/>
          </Link> 
        </li>

        <li className='item log-out'>
          <IoPower 
          onClick={ () => { 
            navigate('/')
            logOut()
            localStorage.clear()
            sessionStorage.clear()
            }} 
          className='icon'/>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar
