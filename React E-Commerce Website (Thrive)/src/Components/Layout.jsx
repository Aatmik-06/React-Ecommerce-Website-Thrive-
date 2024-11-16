import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,Outlet } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { UserOutlined } from '@ant-design/icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
const Layout=()=>{
    return(
        <>
         <Navbar collapseOnSelect expand="lg"  id='navbar'  sticky="top" >
      <Container>
          <Navbar.Brand as={Link} to="/Home" id='logo' >
            <img
              alt=""
              src="src/assets/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            
            <p style={{marginTop:"10px",marginLeft:"5px"}}> 
            Thrive </p>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" id='navitems'>Home</Nav.Link>
            <Nav.Link as={Link} to="/About" id='navitems'>About</Nav.Link>
            <Nav.Link as={Link} to="/Shop" id='navitems'>Shop</Nav.Link>
            <NavDropdown title="pages"  id='navdrop'>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} id='navdrop' >Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/ContactUs" id='navitems' >Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <div id='search'>
          <input type="text" placeholder="Search for products..." id='inp'/>
          <button type="submit"><svg width="17" id='bt' height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12492 15.2498C12.0599 15.2498 15.2498 12.0599 15.2498 8.12492C15.2498 4.18994 12.0599 1 8.12492 1C4.18994 1 1 4.18994 1 8.12492C1 12.0599 4.18994 15.2498 8.12492 15.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9999 16L14.4999 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          </div>
          <FontAwesomeIcon icon={faBarsStaggered} className='bars' />
          </Nav>
        <Nav.Link eventKey={2} href="#memes">
            <UserOutlined id='user-icon' />
            <FontAwesomeIcon icon={faCartShopping} id='cart-icon'/>
            </Nav.Link>
      </Container>
    </Navbar>
        <Outlet/>
        </>
    )
}
export default Layout;