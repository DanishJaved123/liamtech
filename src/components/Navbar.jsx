
import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas"
import defaultLogo from '../assets/images/black-logo.png'; // Add this line;
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = ({ logo = defaultLogo, toggleColor = true  }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Determine button styles
  const hamburgerClass = `hemburger ${toggleColor ? 'dark-icon' : 'light-icon'}`;
  const joinUsClass = `join-us ${toggleColor ? 'dark-button' : 'light-button'}`;
  return (
    <>
      <Sidebar show={show} onHide={handleClose} />
      {/* Desktop Navbar */}
      <div className="custom-nav">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="logo d-flex align-items-center">
                <Button onClick={handleShow} className= {hamburgerClass}>
                  <GiHamburgerMenu />
                </Button>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </Col>
            <Col lg={7} className="text-end">
              <Button className={joinUsClass}>
                <Link to="/career">Join Us</Link>
                <FaArrowRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
// import { useState } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Row, Container, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaArrowRight } from "react-icons/fa";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Logo from "../assets/logo.png";
// import Logo1 from "../assets/black-logo.png";
// import { Link } from "react-router-dom";
// const Navbar = ({ logo, toggleColor } ) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <div className="logo">
//           <Link to='/'><img src={Logo1} alt="" /></Link>
//           </div>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//          <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/about'>About</Link></li>
//           <li><Link to='/service'>Services</Link></li>
//           <li><Link to='/career'>Careers</Link></li>
//           <li><Link to='/service'>Contact</Link></li>
//          </ul>
//         </Offcanvas.Body>
//       </Offcanvas>
//       <div className="custom-nav">
//         <Container>
//           <Row>
//             <Col lg={5}>
//             <div className="logo">
//               <Button onClick={handleShow} className="hemburger">
//                 <GiHamburgerMenu />
//               </Button>
              
//               <Link to='/'><img src={Logo} alt="" /></Link>
//               </div>
//             </Col>
//             <Col lg={7}>
//               <Button className="join-us"><Link to='/career'>Join Us</Link><FaArrowRight/></Button>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Navbar;
