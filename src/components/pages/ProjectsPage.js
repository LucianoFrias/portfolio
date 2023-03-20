import React from 'react'
import './ProjectsPage.css'
import ProjectCard from '../items/ProjectCard'

import NetflixIMG from '../../img/netflix-img.jpg'
import PixelRailsIMG from '../../img/pixel-rails-img.jpeg'
import NotesAppIMG from '../../img/notes-app-img.jpeg'
import StudentManagementSystemIMG from '../../img/student-management-system-img.jpg'

function ProjectsPage() {
  return (
    <div className='centeredPage projectsPage'>

      <h1 className='title'>Projects</h1>

      <div className='projectsContainer'>
        <ProjectCard
        title='Netflix Clone' 
        description='This is a Netflix clone created with the aid of TMDB, serving as a database for movies. I use Firebase for the Hosting.'
        tools='JavaScript, ReactJS, TMDB.' 
        imageUrl={NetflixIMG}
        githubURL="https://github.com/LucianoFrias/netflix-clone-frontend"
        websiteURL="https://netflix-clone-6be83.web.app"/>

        <ProjectCard 
        title='PixelRails'
        description='Website for buying and checking games for a reasonable price!'
        tools='JavaScript, ReactJS.' 
        imageUrl={PixelRailsIMG}
        color='Pink'/>

        <ProjectCard
        title='Notes App'
        description='A website for writing and editing notes, saving them in the local storage database.'
        tools='JavaScript, ReactJS, LocalStorage API.'
        imageUrl={NotesAppIMG}/>

        <ProjectCard
        title='Student Management System'
        description='A collaborative project made in ISFT 151 to manage students classrooms and assistance.'
        tools='JavaScript DOM, PHP, MySQL'
        imageUrl={StudentManagementSystemIMG}
        color='Pink'
        githubURL="https://github.com/mgsantiago-10g/pp-isft151-2022"
         />
      </div>

      <h1><span className='spanBlue'>And more to come...</span></h1>
    </div>
  )
}

export default ProjectsPage