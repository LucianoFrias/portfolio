import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi'
import { AiFillBook } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'
import { MdContactPhone } from 'react-icons/md'
import Logo from '../../img/logo.png'

function Nav() {


  return (
    <nav className='verticalNav'>
        <div>
            <Link to='/' title='Luciano Frias - Software Developer'>
            <img src={Logo} className='logo' alt=''></img></Link>
        </div>

        <div className='elementsContainer'>
            <NavLink className='navElement' activeClassName="active" to='/' title='Home'><AiFillHome /></NavLink>
            <NavLink className='navElement' activeClassName="active" to='/skills' title='Skills'><GiSkills /></NavLink>
            <NavLink className='navElement' activeClassName="active" to='/studies' title='Studies'><AiFillBook /></NavLink>
            <NavLink className='navElement' activeClassName="active" to='/projects' title='Projects'><FaCode /></NavLink>
            <NavLink className='navElement' activeClassName="active" to='/contact-me' title='Contact Me'><MdContactPhone /></NavLink>
        </div>

        <div>  
            
        </div>
    </nav>
  )
}

export default Nav