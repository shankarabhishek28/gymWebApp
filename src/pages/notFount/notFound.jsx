import React from 'react'
import {Link} from 'react-router-dom'
import './notFound.css'
const NotFound = () => {
  return (
    <section>
      <div className="container notFound_container">
        <h2>PAGE NOT FOUND</h2>
        <Link to = '/' className='btn'>Go Back To Home</Link>
      </div>
    </section>
  )
}

export default NotFound