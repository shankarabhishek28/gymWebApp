import React from 'react'

const Header = ({title, img , children}) => {
  return (
    <header className='header '>
        <div className="header_container">
        <div className="header_container_bg">
            <img src={img} alt='header_backgroundImage' />
        </div>
        <div className="header_content animated">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        </div>
    </header>
  )
}

export default Header