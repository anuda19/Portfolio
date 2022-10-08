import React from 'react'
import { FiEye } from 'react-icons/fi'
import './singleCard.css'

const SingleCard = ({img, heading, para, appLink}) => {
  const handleClick = ()=>{
    window.open(appLink)
  }

  return (
    <div className='portfolio_main'>
        <div className="card_img">
            <img src={img} alt="project-img" style={{height:"200px", width:"300px"}}/>
        </div>
        <div className="card_details">
            <h4>{heading}</h4>
            <h6>{para}</h6> 
        </div>
        <div className="buton">
            <button onClick={handleClick}> Live Preview <FiEye/></button>
            <button>Source Code</button>
        </div>
    </div>
  )
}

export default SingleCard