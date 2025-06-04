import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/images/black-logo.png';
const Sidebar = ({ show, onHide }) => {
    return (
        <>
            {/* Mobile Offcanvas Menu */}
            <Offcanvas show={show} onHide={onHide} className="sidebar">
                <Offcanvas.Header closeButton>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li><Link to="/" className='navlinks'>Home</Link></li>
                        <li><Link to="/about" className='navlinks'>About</Link></li>
                        <li><Link to="/service" className='navlinks'>Services</Link></li>
                        <li><Link to="/career" className='navlinks'>Careers</Link></li>
                        <li><Link to="/contact" className='navlinks'>Contact</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar