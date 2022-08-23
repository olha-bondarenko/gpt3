import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports'
import './brand.css'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div data-aos="fade-left" data-aos-duration="500">
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" data-aos="fade-left" data-aos-duration="1000"/>
      </div>
      <div>
        <img src={atlassian} alt="atlassian" data-aos="fade-left" data-aos-duration="1500"/>
      </div>
      <div>
        <img src={dropbox} alt="dropbox" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
      <div>
        <img src={shopify} alt="shopify" data-aos="fade-left" data-aos-duration="2500"/>
      </div>
    </div>
  )
}

export default Brand