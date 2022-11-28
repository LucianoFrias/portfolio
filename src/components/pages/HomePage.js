import React from 'react'
import './HomePage.css'
import MeIMG from '../../img/me.jpg'

import { BsGithub, BsLinkedin } from 'react-icons/bs'


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
          To start navigating through the website, <span className='spanBlue'>click the links to the left.</span>
        </p>

        <a href='https://github.com/LucianoFrias' target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/luciano-frias-1439b71b7/' target='_blank' rel='noreferrer'><BsLinkedin /></a>

        </div>

        <div className='imgContainer'>

        <img alt='' src={MeIMG}></img>

        </div>
      </div>
    </div>
  )
}

export default HomePage