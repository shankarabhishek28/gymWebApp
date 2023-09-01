import React from 'react'
import HeaderImg from '../../../images/header_bg_4.jpg'
import Card from '../../UI/card'
import {plans} from '../../../data'
import './plans.css'
import Header from '../../components/Header'
const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" img = {HeaderImg}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Necessitatibus, quas rerum? Vel veritatis expedita id sunt quibusdam soluta, neque molestias!
      </Header>
      <section className='plans'>
        <div className="container plans_container">
          {
            plans.map(({id, name, desc , price, features})=>{
              return <Card key={id} className= 'plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available},index)=>{
                    return <p key = {index} className = {!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>

              </Card>
            })
          }
        </div>

      </section>

    </>
  )
}

export default Plans