import React from 'react'

const SingleCard = ({img, heading, para, appLink}) => {
  const handleClick = ()=>{
    window.open(appLink)
  }
  return (
    <div>
        <div className="card_img">
            <img src={img} alt="project image" style={{height:"200px", width:"300px"}}/>
        </div>
        <div className="card_details">
            <h4>{heading}</h4>
            <h6>{para}</h6>
        </div>
        <div className="butn">
            <button onClick={handleClick}>Live Preview</button>
            <button>Source Code</button>
        </div>
    </div>
  )
}

export default SingleCard