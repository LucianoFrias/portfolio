import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
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
            <Link className='navElement' to='/' title='Home'><AiFillHome /></Link>
            <Link className='navElement' to='/skills' title='Skills'><GiSkills /></Link>
            <Link className='navElement' to='/studies' title='Studies'><AiFillBook /></Link>
            <Link className='navElement' to='/projects' title='Projects'><FaCode /></Link>
            <Link className='navElement' to='/contact-me' title='Contact Me'><MdContactPhone /></Link>
        </div>

        <div>  
            
        </div>
    </nav>
  )
}

export default Nav