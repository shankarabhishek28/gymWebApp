import React from 'react'
import Section from './Section'
import Card from '../UI/card'
import { testimonials } from '../../data'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {ImQuotesLeft} from 'react-icons/im'



const Testimonials = () => {
  const [index, setIndex] = React.useState(0)
  const {name, quote, job, avatar} = testimonials[index]
  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1);
    if(index >= testimonials.length - 1){
      setIndex(0)
    }
  }
  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1);
    if(index <= 0){
      setIndex(testimonials.length - 1)
    }
  }


  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <Section icon = {<ImQuotesLeft />} title = "Testimonials" className='testimonials_head'/>
        <Card className='testimonial'>
          <div className="testimonial_avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <p className='testimonial_quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className='testimonial_title'>{job}</small>
        </Card>
        <div className="testimonials_btn-container">
        <button className='testimonials_btn' onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
        <button className='testimonials_btn' onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
        </div>


      </div>
    </section>
  )
}

export default Testimonials