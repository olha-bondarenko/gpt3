import React, { useEffect } from 'react'
import './App.css'
import { Navbar, Brand, CTA, } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..


const App = () => {
  useEffect(() => {
    AOS.init({});
  })
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App