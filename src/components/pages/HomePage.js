import React from 'react'
import './HomePage.css'
import MeIMG from '../../img/me.jpg'

import { BsGithub, BsLinkedin, BsFillBriefcaseFill } from 'react-icons/bs'


function HomePage() {

  return (
    <div className='centeredPage homePage'>

        <div className='homeContainers'>
        <div className='informationContainer'>

        <h1>Hello, I'm <span className='colorChangeSpan '>Luciano</span> from Argentina!</h1>

        <h2><span className='spanPink'>Software Developer</span><br></br>
        <span className='spanBlue'>PC Repairing Technician</span></h2>

        <p>Always looking to learn more every day and strive for a better future
          for myself and friends. <br></br>
        </p>

        <a 
        href='https://drive.google.com/file/d/1N78lrzMY_vll7n-KTMJULs361FAbl5Hz/view' 
        target="_blank" 
        rel='noreferrer' 
        title='Download CV'>
        <BsFillBriefcaseFill /></a>

        <a 
        href='https://github.com/LucianoFrias' 
        target='_blank' 
        rel='noreferrer' 
        title='Github'>
        <BsGithub /></a>

        <a 
        href='https://www.linkedin.com/in/luciano-frias-1439b71b7/' 
        target='_blank' 
        rel='noreferrer' 
        title='LinkedIn'>
        <BsLinkedin /></a>

        </div>

        <div className='imgContainer'>

        <img alt='' src={MeIMG}></img>

        </div>
      </div>
    </div>
  )
}

export default HomePage