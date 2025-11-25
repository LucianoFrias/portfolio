import React from 'react'
import './StudyCard.css'

function StudyCard({institute, degree, startingDate, endingDate, state}) {
  return (
    <div className='studyCard'>
        <h2><span className='spanPink'>Institute:</span> {institute}</h2>
        <h3><span className='spanBlue'>Degree:</span> {degree}</h3>
        <h3><span className='spanLightGrey'>Duration:</span> {startingDate} - {endingDate}</h3>
        <h3><span className='spanWhite'>State:</span> <span className={state === 'Finished.' ? 'stateFinished' : 'stateInProgress'}>{state}</span></h3>
    </div>
  )
}

export default StudyCard