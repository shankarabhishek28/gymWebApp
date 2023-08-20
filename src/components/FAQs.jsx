import React from 'react'
import Section from './Section'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../../data'
import FAQ from './FAQ'
const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <Section icon = {<FaQuestion />} title="FAQs" />
        <div className="faqs_wrapper">
          {
          faqs.map(({id, question, answer }) => {
              return <FAQ keys = {id} question={question} answer={answer}/>
          })
        }
        </div>
      </div>
    </section>
  )
}

export default FAQs