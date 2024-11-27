import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,Outlet } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserOutlined } from '@ant-design/icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
const Layout=()=>{
  const mycart= useSelector(state=>state.mycart.cart);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate= useNavigate();


  const [adminid, setAdminid]=useState("");
  const [password, setPassword]=useState("");

  
  const handleSubmit=()=>{
    let api=`http://localhost:3000/admin/?adminid=${adminid}`;
     axios.get(api).then((res)=>{
         if (res.data.length>=1)
         {
             if (res.data[0].password==password)
             {
              window.location.href = 'http://localhost:5174';
             }
             else 
             {
               alert("Invalid Password!")
             }
         }
         else 
         {
           alert("Invalid AdminID")
         }
 
     })
    }
 

  const cartLen= mycart.length;
    return(
        <>
         <Navbar collapseOnSelect expand="lg" id='navbar' sticky="top" >
      <Container>
          <Navbar.Brand as={Link} to="/Home" id='logo' >
            <img
              alt=""
              src="src/assets/logo.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            <h4 style={{marginTop:"10px",marginLeft:"5px"}}> 
            Electronix </h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" id='navitems'>Home</Nav.Link>
            <Nav.Link as={Link} to="/About" id='navitems'>About</Nav.Link>
            <Nav.Link as={Link} to="/Shop" id='navitems'>Shop</Nav.Link>
            <NavDropdown title="pages"  id='navdrop-main'>
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
        <Nav.Link eventKey={2} as={Link} >
        <Dropdown variant="dark">
      <Dropdown.Toggle style={{backgroundColor:"transparent",border:"none"}}  >
         <UserOutlined   id='user-icon' />
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item variant="dark"> <Button variant="dark"  onClick={handleShow} style={{width:"100%",border:"none",backgroundColor:"transparent"}}>
        Admin Login
      </Button></Dropdown.Item >
      <Dropdown.Item variant="dark"> <Button variant="dark"  style={{width:"100%",border:"none",backgroundColor:"transparent"}}>
        User Login
      </Button></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Admin Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Admin Id"
                value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} 
                autoFocus
              />

               
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Admin Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Admin Password"
                value={password} onChange={(e)=>{setPassword(e.target.value)}} 
                autoFocus
              />   
               </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
      
         <Button style={{backgroundColor:"rgb(245, 9, 99)",border:"none"}} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                   
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="cart" >
              <div style={{display:"flex"}}>
            <FontAwesomeIcon icon={faCartShopping} id='cart-icon'/>
            <h6 style={{width:"17px",height:"18px"}} id="carticon"> {cartLen} </h6>
            </div>
            </Nav.Link>
       </Container>
        </Navbar>
        <Outlet/>
        <Container>
        <div id="footer-services">
          <div id='services-c1'>
            <img src="src/assets/Images/g-truck.png" alt="" />
            <h5>Worldwide Delivery</h5>
            <p> With sites in 5 languages, we ship to over 200 countries & regions.</p>
          </div>
          <div id='services-c1'>
            <img src="src/assets/Images/g-credit.png" alt="" />
            <h5>Safe Payment</h5>
            <p> Pay with the world’s most popular and secure payment methods.</p>
          </div>
          <div id='services-c1'>
            <img src="src/assets/Images/g-safety.png" alt="" />
            <h5>Shop with Confidence</h5>
            <p>Our Buyer Protection covers your purchase from click to delivery.</p>
          </div>
          <div id='services-c1'>
            <img src="src/assets/Images/g-tele.png" alt="" />
            <h5>24/7 Help Center</h5>
            <p> Round-the-clock assistance for a smooth shopping experience.</p>
          </div>
          </div>
        </Container>
        <footer id='footer'>
          <div id='footer-main'>
          <h2>Subscribe for <br />
          Latest Trends & Offers</h2>
          <div id='footer-input'><input type="text"  placeholder='Enter Your Email'/> <button>Subscribe</button></div>
          </div>
        </footer>
        <div id='pay'>
          <div> <p id='pay-p'> © 2020-2024. All rights reserved.</p></div>
          <div>
            <img id='payment-images' src="src/assets/Images/visa.png" alt="" />
            <img id='payment-images' src="src/assets/Images/paypal.png" alt="" />
            <img id='payment-images' src="src/assets/Images/mastercard.png" alt="" />
            <img id='payment-images' src="src/assets/Images/american-express.png" alt="" />
            <img id='payment-images' src="src/assets/Images/western-union.png" alt="" />
            </div>
          </div>
        </>
    )
}
export default Layout;