import React, { useState } from 'react'
import { BsGithub, BsLink } from 'react-icons/bs'
import './ProjectCard.css'

function ProjectCard({title, description, tools, imageUrl, color, githubURL, websiteURL}) {

    const [isShown, setIsShown] = useState(false);


  return (
    <div className='projectCard ' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{
        backgroundImage: `url(${imageUrl})`
    }}>
        <div className={isShown ? 'showCardContent' : 'hiddenCardContent'}>
        <h1 className={color === 'pink' || color === 'Pink'  ? 'spanPink' : 'spanBlue'}>{title}</h1>
        <p>{description}</p>
        <h2><span className={color === 'pink' || color === 'Pink' ? 'spanPink' : 'spanBlue'}>Tools used: </span>{tools}</h2>

        <div className='links'>
        <a
        className={githubURL ? "linkEnabled" : "linkDisabled"} 
        href={githubURL} 
        target='_blank' 
        rel='noreferrer' 
        title='Github Project'>
        <BsGithub /></a>

        <a 
        className={websiteURL ? "linkEnabled" : "linkDisabled"}
        href={websiteURL} 
        target='_blank' 
        rel='noreferrer' 
        title='Website Link'>
        <BsLink /></a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard