import React, { useState } from 'react'
import './ProjectCard.css'

function ProjectCard({title, description, tools, imageUrl, color}) {

    const [isShown, setIsShown] = useState(false);

  return (
    <div className='projectCard ' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{
        backgroundImage: `url(${imageUrl})`
    }}>
        <div className={isShown ? 'showCardContent' : 'hiddenCardContent'}>
        <h1 className={color === 'pink' || color === 'Pink'  ? 'spanPink' : 'spanBlue'}>{title}</h1>
        <p>{description}</p>
        <h2><span className={color === 'pink' || color === 'Pink' ? 'spanPink' : 'spanBlue'}>Tools used: </span>{tools}</h2>
        </div>
    </div>
  )
}

export default ProjectCard