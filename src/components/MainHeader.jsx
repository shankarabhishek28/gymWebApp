import React from 'react'
import Image from '../../images/main_header.png'
import { Link } from 'react-router-dom'
const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#10DaysOfWorkOut</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi similique eius
            optio. Dolorum, quaerat.
          </p>
          <Link to="/plans" className='btn 1g'>Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-img">
            <img src = {Image} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader