import React, {useState} from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiFairyWand } from 'react-icons/gi'
import './NavbarStyles.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

  return (
    <div className='navbar'>
        <div className="container">
            <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Educations'>Educations</Link>
            </li>
            <li>
                <Link to='/Courses'>Courses</Link>
            </li>
            <li>
                <Link to='/Apply'>Apply</Link>
            </li>
            <li>
                <Link to='/Staff'>Staff</Link>
            </li>
                    <div className='mobile-menu'>
                        <button>Shop</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiFairyWand className='icon' />
                        </div>
                    </div>
            </ul>

            <div className={slide ? 'logo slide-right' : 'logo'}>
                <h3>School of Magic</h3>
            </div>

            <ul className='nav-menu hide'>
                <li><a href='/'>Log In</a></li>
                <li><Link to='/Apply'>Apply</Link></li>
                
            </ul>

            <div className="hamburger" onClick={handleNav}>
            {nav ? (<FaTimes size={20} style={{color: '#ffffff'}} />) : (<FaBars style={{color: '#ffffff'}} size={20} />)}            </div>

        </div>
    </div>
  )
}

export default Navbar