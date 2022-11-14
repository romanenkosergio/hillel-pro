 import React from 'react'
 import {Link} from 'react-router-dom'

 const About = () => {

  return (
    <div className='about'>
      <h1>ABOUT</h1>
      <Link  to={'/'}>
        <button>Home</button>
      </Link>
    </div>
  )
 }

 export default About