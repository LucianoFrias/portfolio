import React from 'react'
import StudyCard from '../items/StudyCard'
import './StudiesPage.css'

function StudiesPage() {
  return (
    <div className='centeredPage studiesPage'>

      <h1 className='title'>Studies</h1>

      <div className='studiesContainers'>


          <StudyCard
           institute='Fray Mamerto Esquiu'
           degree='Natural Science Bachelor'
           startingDate='March 2012'
           endingDate='November 2018'
           state='Finished.'/>

          <hr></hr>

          <StudyCard
          institute='Hilet'
          degree='PC Repair Technician'
          startingDate='February 2019'
          endingDate='December 2019'
          state='Finished.'/>

          <hr></hr>


          <StudyCard
          institute='ISFT 151'
          degree='Systems Analyst Technician'
          startingDate='March 2020'
          endingDate='December 2023'
          state='In progress...' />


      </div>
    </div>
  )
}

export default StudiesPage