import React from 'react'
import { FiEye } from 'react-icons/fi'
import './singleCard.css'

const SingleCard = ({img, heading, para, appLink, srcCode}) => {
  const handleClick = ()=>{
    window.open(appLink)
  }
  const sourceCode = ()=>{
    window.open(srcCode)
  }

  return (
    <div className='portfolio_main' data-aos="flip-up">
        <div className="card_img">
            <img src={img} alt="project-img" style={{height:"200px", width:"300px"}}/>
        </div>
        <div className="card_details">
            <h4>{heading}</h4>
            <h6>{para}</h6> 
        </div>
        <div className="buton">
            <button onClick={handleClick}> Live Preview <FiEye/></button>
            <button onClick={sourceCode}>Source Code</button>
        </div>
    </div>
  )
}

export default SingleCard