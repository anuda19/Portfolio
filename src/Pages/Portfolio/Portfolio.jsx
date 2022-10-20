import React from 'react'
import SingleCard from './SingleCard'
import img1 from '../../Assets/mba.jpg'
import img2 from '../../Assets/crm.jpg'
import img3 from '../../Assets/ecommerce.jpg'
import img4 from '../../Assets/car-rental.png'
import img5 from '../../Assets/todo.png'
import img6 from '../../Assets/stopwatch.png'
import './portfolio.css'

const Portfolio = () => {
    const cardsArr = [
        {
            img: img1,
            heading: "Show Time",
            para:"Movie Booking App",
            appLink: "https://showtime-in.netlify.app",
            srcCode: "https://github.com/anuda19/Movie-booking-App"
        },
        {
            img: img2,
            heading: "CRM",
            para:"CRM Application",
            appLink: "https://crm-app-reactjs.netlify.app",
            srcCode: "https://github.com/anuda19/CRM-App"
        },
        {
            img: img3,
            heading: "Insta Cart",
            para:"E-Commerce Application",
            appLink: "https://instacart-in.netlify.app",
            srcCode: "https://github.com/anuda19/CRM-App"
        },
        {
            img: img4,
            heading: "Ponocab",
            para:   "Car Rental",
            appLink: "https://rental-car-js.netlify.app/",
            srcCode: "https://github.com/anuda19/Car-rental"
        },
        {
            img: img5,
            heading: "Todo",
            para:"Todo Application",
            appLink: "https://todoappwith-react.netlify.app",
            srcCode: "https://github.com/anuda19/Todo_App"
        },
        {
            img: img6,
            heading: "Stopwatch",
            para:"Stopwatch With task",
            appLink: "https://stopwatch-with-task.netlify.app",
            srcCode: "https://github.com/anuda19/Stopwatch "
        }
    ]
  return (
    <div className='portflio_main' id='portfolio'>
        <div className='portflio_heading'>
        <h2>My Portfolio</h2>
        </div>
        <div className="card_main">
        {cardsArr.map((item)=>{
            const {img, heading, para, appLink, srcCode} = item;
            return (
                <div className="card-section">
                <SingleCard 
                    img={img}
                    heading={heading}
                    para={para}
                    appLink={appLink}
                    srcCode={srcCode}
                />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Portfolio;