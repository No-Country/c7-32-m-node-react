import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../styles/navbar.css'
import logo from '../../assets/images/Logo-bg-white.png'
import { IoGrid, IoStatsChart, IoWalletOutline, IoPerson, IoSettingsSharp, IoPower} from 'react-icons/io5'

const Navbar = () => {

  const navigate = useNavigate()
  
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' />
      <ul className='nav-list'>
        <li className='item'> <Link to='/dashboard'> <IoGrid className='icon'/> </Link> </li>
        <li className='item'> <Link to='/stats'> <IoStatsChart className='icon'/> </Link> </li>
        <li className='item'> <Link to='/wallet'> <IoWalletOutline className='icon'/> </Link> </li>
        <li className='item'> <Link to='/profile'> <IoPerson className='icon'/> </Link> </li>
        <li className='item'> <Link to='/settings'> <IoSettingsSharp className='icon'/> </Link> </li>
        <li className='item log-out'> <IoPower onClick={ () => navigate('/') } className='icon'/> </li>
      </ul>
    </nav>
  )
}

export default Navbar
