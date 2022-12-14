import React from 'react'
import './header.css'
import people from '../../assets/Group81.png'
import ai from '../../assets/ai.png'
 
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content' >
        <h1 className='gradient__text' data-aos="fade-up" data-aos-duration="1000">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p data-aos="fade-up" data-aos-duration="2000">Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input' data-aos="fade-up" data-aos-duration="1500">
          
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people' data-aos="fade-up" data-aos-duration="2000">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="AI" data-aos="fade-up" data-aos-duration="2000"/>
      </div>
    </div>
  )
}

export default Header