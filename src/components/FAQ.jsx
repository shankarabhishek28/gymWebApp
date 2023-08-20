import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerSowing] = useState(false)
  return (
    <article className="faq" onClick={() => setIsAnswerSowing(!isAnswerShowing)}>
      <div>
        <h4>{question}</h4>
        <button className="faq_icon" >
          {isAnswerShowing ?<AiOutlineMinus /> :<AiOutlinePlus />}
          
        </button>
      </div>
      {isAnswerShowing ? <p>{answer}</p> : ""}
    </article>
  )
}

export default FAQ