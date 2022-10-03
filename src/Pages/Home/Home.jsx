import React from 'react'
import backImg from '../../Assets/bacground.jpg'
import avtar from '../../Assets/avtar-removebg-preview.png'
import './home.css'

const Home = () => {
  return (
    <>
    <div className='home_main'>
        <img src={backImg} alt="backgroundImage" />
        <div className="left">
        <h1>Hello,</h1>
        <h2>I Am Developer</h2>
        <p>If you want to grow your business make your online presence with us. <br /> Take your business to the next level. </p>
        </div>
        <div className="bttn">
            <button>Hire Me</button>
            <button>Get Quote</button>
        </div>
        <div className="avtar_img">
        <img src={avtar} alt="avtarImage" />
        </div>
    </div>
    </>
  )
}

export default Home