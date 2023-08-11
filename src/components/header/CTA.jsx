import React from 'react'
import CV from '../../assets/cv.pdf'
import {Zoom, Fade , Flip ,Bounce, Roll} from 'react-reveal';
const CTA = () => {
  return (
    <div className='cta'>
      <Bounce left duration={2200}>
      <a href={CV} download className='btn'>Download CV</a>
      </Bounce>
      <Bounce right duration={2200}>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </Bounce>
        
             
    </div>
  )
}

export default CTA