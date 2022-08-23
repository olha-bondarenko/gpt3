import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading' data-aos="fade-left" data-aos-duration="2000">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA' data-aos="fade-up" data-aos-duration="1000">
          <Article imageUrl={blog01} date="August 22 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Article imageUrl={blog02} date="August 22 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Article imageUrl={blog03} date="August 22 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Article imageUrl={blog04} date="August 22 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <Article imageUrl={blog05} date="August 22 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog