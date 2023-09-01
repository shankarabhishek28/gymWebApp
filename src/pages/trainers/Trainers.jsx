import React from 'react'
import './trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../../images/header_bg_5.jpg'
import { trainers } from '../../../data'
import { IoLogoWhatsapp } from 'react-icons/io'
import Card from '../../UI/card'

const Trainers = () => {
  return (
    <>
    <Header title='Our Trainers' img={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reprehenderit quos, sint aut 
      sunt reiciendis error nobis adipisci veritatis sit.
    </Header>
    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Card className='trainer'>
              <div className="trainer_img">
                <img src={image} alt = "trainer's image" />
              </div>
              <h3>{name}</h3>
              <p>{job}</p>
              
              <a className="trainer_socials" href={socials}><h4> Click To Talk </h4> <h4><IoLogoWhatsapp /></h4></a>
             
             
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers