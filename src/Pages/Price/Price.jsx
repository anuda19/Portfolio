import React from 'react'
import './price.css'

const Price = () => {
  return (
    <>
        <h2>Price</h2>
    <div className='price_cards'>
        <div className="basic"><h3>Basic</h3></div>
        <div className="standard"><h3>Standard</h3></div>
        <div className="premeum"><h3>Premium</h3></div>
    </div>
    </>
  )
}

export default Price