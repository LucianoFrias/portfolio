import React from 'react'
import './SkillsPage.css'
import ToolsUsed from '../../img/tools-used.jpg'
import PcRepair from '../../img/pc-repair-img.jpg'
import ExtraSkills from '../../img/extra-skills-img.png'

function SkillsPage() {
  return (
    <div className='centeredPage skillsPage'>
        <div className='skillsContainers'>
            
          <div className='toolsUsedContainer'>
              <div className='infoContainer'>
                <h1><span className='spanPink'>Tools used:</span></h1>
                <ul>
                  <li><span className='spanBlue'>Web Development: </span> HTML, CSS, JavaScript, ReactJS.</li>
                  <li><span className='spanBlue'>High-Level Languages: </span> C++, Java, C#.</li>
                  <li><span className='spanBlue'>DB Languages: </span> MySQL.</li>
                </ul>
              </div>

              <img alt='' src={ToolsUsed}></img>
          </div>

          <div className='pcRepairContainer'>

              <div className='infoContainer'>
                  <h1><span className='spanPink'>PC Repairing Skills: </span></h1>
                  <ul>
                    <li>PC Formatting and removal of malware.</li>
                    <li><span className='spanBlue'>Component replacement </span> in case of failure.</li>
                    <li><span className='spanBlue'>Windows Diagnosis</span> in case of system error.</li>
                    <li>Hard Drive and RAM checks.</li>
                  </ul>
              </div>
              
              <img alt='' src={PcRepair}></img>

          </div>

          <div className='extraSkillsContainer'>
            <div className='infoContainer'>
                <h1><span className='spanPink'>Extra Skills:</span></h1>
                <ul>
                  <li>A mindset of <span className='spanBlue'>constant learning.</span></li>
                  <li><span className='spanBlue'>Work and influence</span> as a team.</li>
                  <li>Willing to <span className='spanBlue'>lead and accompany</span> my colleagues.</li>
                </ul>
            </div>

            <img alt='' src={ExtraSkills}></img>
          </div>

        </div>
    </div>
  )
}

export default SkillsPage