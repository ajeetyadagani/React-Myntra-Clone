import React from 'react'
import Banner1 from "../images/Banner1.jpg"
import Banner2 from "../images/Banner2.jpg"
const Banner = () => {
  return (
    <div>
      <img src={Banner1} className='p-5 w-full'  alt=""/>
      <img src={Banner2} className='p-10 w-full' alt=""/>
    </div>
  )
}

export default Banner
