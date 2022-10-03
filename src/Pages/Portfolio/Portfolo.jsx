import React from 'react'
import SingleCard from './SingleCard'
import img1 from '../../Assets/mba.jpg'
import img2 from '../../Assets/crm.jpg'
import img3 from '../../Assets/ecommerce.jpg'
import img4 from '../../Assets/gbooks.jpg'
import img5 from '../../Assets/todo.png'
import img6 from '../../Assets/weather.jpg'
import './portfolio.css'

const Portfolo = () => {
    const cardsArr = [
        {
            img: img1,
            heading: "Show Time",
            para:"Movie Booking App",
            appLink: "https://showtime-in.netlify.app"
        },
        {
            img: img2,
            heading: "CRM",
            para:"CRM Aplication",
            appLink: "https://crm-app-reactjs.netlify.app"
        },
        {
            img: img3,
            heading: "Insta Cart",
            para:"E-Commerce Aplication",
            appLink: "https://instacart-in.netlify.app"
        },
        {
            img: img4,
            heading: "Google Books",
            para:"Google Boks Api Aplication",
            appLink: "https://google-books-with-api.netlify.app"
        },
        {
            img: img5,
            heading: "Todo",
            para:"Todo Aplication",
            appLink: "https://todoappwith-react.netlify.app"
        },
        {
            img: img6,
            heading: "Weather",
            para:"Weather Report",
            appLink: "https://weather-forecast-in.netlify.app"
        }
    ]
  return (
    <div>
        <h2>My Portfolio</h2>
        <div className="card_main">
        {cardsArr.map((item)=>{
            const {img, heading, para, appLink} = item;
            return (
                <div className="card-section">
                <SingleCard 
                    img={img}
                    heading={heading}
                    para={para}
                    appLink={appLink}
                />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Portfolo