import React from 'react'
import Image from '../../images/values.jpg'
import { GiCutDiamond } from 'react-icons/gi'
import Section from './Section'
import { values } from '../../data'
import Card from '../UI/card'
const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">

        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt='Values Image' />
          </div>
        </div>
        
        <div className="values_right">
          <Section icon={GiCutDiamond} title="Values" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum expedita maiores incidunt repudiandae harum
            ipsam eligendi aperiam omnis totam, quisquam, sint odio vel, cumque magnam cum ex saepe explicabo corrupti.</p>
          <div className="values_wrapper">
            {
              values.map(({ id, icon, title, desc }) => {
                return <Card key={id} className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Values