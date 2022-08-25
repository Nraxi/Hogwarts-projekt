import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import './HeaderStyles.css'
import wandVideo from './Wand.mp4'

const Header = () => {
  return (
    <div className='hero'>
        <video loop muted autoPlay id='video'>
            <source src={wandVideo} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Hogwarts</h1><br></br><br></br><br></br>
        <p>Take your first step towards a magical future!</p><br></br><br></br><br></br>
    <div>
        <botton to='/educations' className='btn'>Alohamora</botton>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <botton to='/contact' className='btn btn-light'>Learn More</botton>
    </div>
    </div>
    </div>
  )
}

export default Header