import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsMessenger } from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' img={HeaderImage}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in reprehenderit?
        Laudantium nemo nobis voluptas nam repudiandae? Aliquam, unde aspernatur.</p>
       
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href='mailto:abhishekshankar853@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href='https://wa.me/+917817037017 ' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
            <a href=' ' target='_blank' rel='noreferrer noopener'><BsMessenger /></a>


          </div>
        </div>
      </section>
    </>
  )
}

export default Contact