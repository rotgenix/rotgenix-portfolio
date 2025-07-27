import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

import "./styles/navbar.css"
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // return (
  //   <Router>
  //     <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
  //       <Container>
  //         <Navbar.Brand href="/">
  //           <img src={logo} alt="Logo" />
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav">
  //           <span className="navbar-toggler-icon"></span>
  //         </Navbar.Toggle>
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="ms-auto">
  //             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
  //             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
  //             <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
  //           </Nav>
  //           <span className="navbar-text">
  //             <div className="social-icon">
  //               <a href="#"><img src={navIcon1} alt="" /></a>
  //               <a href="#"><img src={navIcon2} alt="" /></a>
  //               <a href="#"><img src={navIcon3} alt="" /></a>
  //             </div>
  //             <HashLink to='#connect'>
  //               <button className="vvd"><span>Let’s Connect</span></button>
  //             </HashLink>
  //           </span>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </Router>
  // )

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* <img src={logo} alt="R0tg3n1x" /> */}
          {!scrolled && <div>
            <p>r0tg3n1x</p>
            <p>Rohit Prajapati</p>
          </div>}

          {scrolled && <div>
            <p
              style={{
                // color: scrolled ? "rgba(202, 72, 150, 0.5)" : "",
                // textShadow: scrolled ? "3px 3px 6px rgba(104, 104, 104, 0.6)" : "",
                fontSize: "32px"
              }}
            >Rohit Prajapati</p>
            <p
              style={{
                // color: scrolled ? "#FFF" : "",
                // fontSize: scrolled ? "24px" : ""
                margin: "-25px 0px 0px 60px"
              }}
            >r0tg3n1x</p>
          </div>}
        </Link>

        {/* Add Hamburger Here  */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> */}

        <div id="basic-navbar-nav" className="navbar-social-links-container">
          <div className="navbar-links-container">
            <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >Home</a>
            <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
            <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
          </div>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <a href='#connect'>
              <button className="vvd" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "48px"
              }}>
                <span>Let’s Connect</span>
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
