import React from 'react'
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='Footer'>
      <div className='spanLineforFooter'></div>
      <p className='copyrightclass'>Design & Built by Umar Jamil &copy; {currentYear}. All rights reserved.</p>
    </div>
  )
}

export default Footer