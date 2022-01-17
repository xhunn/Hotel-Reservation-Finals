import { Navbar, Nav, Image, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from './icon.png'


const AppNavbar = () => {
   return (
      <>
         <Navbar className="bg-dark sticky-top" expand="lg">
            <Navbar.Brand as={NavLink} to="/" className="ml-2">
               <Image src={logo}/>
            </Navbar.Brand>
            <h3 className="text-light justify-content-center">HOLIVA</h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mx-auto"/>
               <Nav className="mx-3">
                  <Nav.Link as={NavLink} to="/home" className="text-light">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/reserve" className="text-light">Reserve</Nav.Link>
                  <Nav.Link as={NavLink} to="/shop" className="text-light">Shop</Nav.Link>
                  <Nav.Link as={NavLink} to="/login" className="text-light">Login</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </>
   )
}

export default AppNavbar;