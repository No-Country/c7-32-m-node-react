import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoGrid, IoWalletOutline, IoPerson, IoPower, IoMenuOutline, IoCloseOutline} from 'react-icons/io5'

import { useUserContext } from '../context/userContext'

import '../../styles/navbar.css'
import logo from '../../assets/images/Logo-bg-white.png'

const Navbar = () => {

  const navigate = useNavigate()
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
  )
}

export default Navbar
