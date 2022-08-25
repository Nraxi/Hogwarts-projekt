import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                <div>
                    <p> Wouldn't you like to know</p>
                    <h4>Stockholm, SWEDEN</h4>
                </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> +46 892 391 01</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> WeUseOwls@duh.com</h4>
                </div>
            </div>
        <div className='right'>
            <h4>About Us</h4>
            <p>Most knowledgable wizards around the world have gathered here to offer you the best magical education you deserve!</p>
        <div className='social'>
            <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer