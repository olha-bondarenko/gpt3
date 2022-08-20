import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const whatGPT3Text = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
const chatbotText = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
const knowledgebaseText = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
const educationText = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text={whatGPT3Text}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
        The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Feature title='Chatbots' text={chatbotText}/>
      <Feature title='Knowledgebase' text={knowledgebaseText}/>
      <Feature title='Education' text={educationText}/>
      </div>
    </div>
  )
}

export default WhatGPT3