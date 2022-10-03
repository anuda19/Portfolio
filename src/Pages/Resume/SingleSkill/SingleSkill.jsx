import React from 'react'
import './singleSkill.css'

const SingleSkill = ({heading, width, icon}) => {
  return (
    <div className='skill_main'>
        <div className="skill_data">
                <h5> <span>{icon}</span> {heading}</h5>
                <div className='percent' style={{width:`${width}`}}>{width}</div>
                <div className='bar'>
                    <div className="progress" style={{width:`${width}`}}></div>
                </div>
            </div>
    </div>
  )
}

export default SingleSkill