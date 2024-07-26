import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me1.png'
import {Zoom, Fade , Flip ,Bounce, Roll} from 'react-reveal';
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <Zoom duration={1800}>
        <h5>Hello I'm</h5>
        <h1>Muhammad Sufyan</h1>
        <h5 className="text-light">Back-End Developer</h5>
        </Zoom>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <Bounce right duration={1800}>
          <img src={ME} alt="me"/>
          </Bounce>
          
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default header