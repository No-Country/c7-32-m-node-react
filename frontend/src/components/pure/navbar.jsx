<<<<<<< HEAD
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoGrid, IoWalletOutline, IoPerson, IoPower, IoMenuOutline, IoCloseOutline} from 'react-icons/io5'

import { useUserContext } from '../context/userContext'

import '../../styles/navbar.css'
import logo from '../../assets/images/Logo-bg-white.png'
=======
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../styles/navbar.css'
import logo from '../../assets/images/Logo-bg-white.png'
import { IoGrid, IoStatsChart, IoWalletOutline, IoPerson, IoSettingsSharp, IoPower} from 'react-icons/io5'
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e

const Navbar = () => {

  const navigate = useNavigate()
<<<<<<< HEAD
  const { logOut } = useUserContext()
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <>
    { screen.width < 768 ?
      <>
        { openMenu ?
          <IoCloseOutline className='icon-menu' onClick={() => setOpenMenu( !openMenu ) }/>
          :
          <IoMenuOutline className='icon-menu' onClick={() => setOpenMenu( !openMenu ) }/>
        }

        <nav className={`navbar ${ openMenu && "active" }`} >
        
          <ul className='nav-list'>
            <li className='item'>
              <Link to='/dashboard'>
                <IoGrid className='icon'/>
                Dashboard
              </Link> 
            </li>

            <li className='item'>
              <Link to='/wallet'> 
                <IoWalletOutline className='icon'/>
                Wallet
              </Link> 
            </li>
            
            <li className='item'>
              <Link to='/profile'>
                <IoPerson className='icon'/>
                Profile
              </Link> 
            </li>

            <li 
              className='item log-out'
              onClick={ () => { 
                    navigate('/')
                    logOut()
                    localStorage.clear()
                    sessionStorage.clear()
                    }} 
              >
              <IoPower className='icon'/>
              Sign Out
            </li>
          </ul>
        </nav>
      </>
      :
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

          <li 
            className='item log-out'
            onClick={ () => { 
                navigate('/')
                logOut()
                localStorage.clear()
                sessionStorage.clear()
                }}
            >
            <IoPower className='icon'/>
          </li>
        </ul>
      </nav>
    }
    </>
=======
  
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
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
  )
}

export default Navbar
