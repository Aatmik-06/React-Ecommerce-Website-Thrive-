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
const Layout=()=>{
    return(
        <>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src/assets/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Thrive
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="pages" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <input type="text" placeholder="Search for products..." value=""/>
          <button type="submit"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12492 15.2498C12.0599 15.2498 15.2498 12.0599 15.2498 8.12492C15.2498 4.18994 12.0599 1 8.12492 1C4.18994 1 1 4.18994 1 8.12492C1 12.0599 4.18994 15.2498 8.12492 15.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9999 16L14.4999 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
         
            <Nav.Link eventKey={2} href="#memes">
            <UserOutlined />
            <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Outlet/>
        </>
    )
}
export default Layout;