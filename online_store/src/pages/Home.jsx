import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


const Home = () => {

  return (
    <div className='home'>
      <h1>HOME</h1>
      <Link to={'about'}>
        <Button variant="outline-info">About</Button>{' '}
      </Link>
    </div>
  )
}

export default Home