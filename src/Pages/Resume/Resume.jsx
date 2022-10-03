import React, { useState } from 'react'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import './resume.css'
import Education from './Education/Education'

const Resume = () => {
  const [skill, setSkill] = useState([
    true, false, false
  ])
  const handleExp = ()=>{
    setSkill([false, true, false])
  }
  const handleEdu = ()=>{
    setSkill([false, false, true])
  }
  const handlePro = ()=>{
    setSkill([true, false, false])
  }
  return (
    <div>
    <h2>My Resume</h2>
        <div className="heading">
            <h5 onClick={handlePro}>Professinal Skills</h5>
            <h5 onClick={handleExp} className='experience'>Experience</h5>
          <h5 onClick={handleEdu} >Education</h5>
            <h5>Interview</h5>
        </div>
        {skill[0]? 
        <Skills />: null
        }
        {skill[1]? 
          <Experience />: null
        }
        {skill[2]? 
          <Education />: null
        }
    </div>
  )
}

export default Resume