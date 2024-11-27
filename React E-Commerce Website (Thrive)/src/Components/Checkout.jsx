import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Upi from "./Upi";
import Card from "./Card";
import Cod from "./Cod";
import NetBanking from "./NetBanking";
import axios from "axios";
const Checkout = () => {


  const [input, setinput] = useState({});
  const handleInputorders = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const { amt } = useParams();
  const [paymethod, setPayMethod] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    let val = e.target.value;
    setPayMethod(val);
  };

  let ans1;
  if (paymethod=="cash")
  {
     ans1=<Cod/>
  }
  else
  if(paymethod=="internet")
  {
      ans1=<NetBanking/>
  }
  else
  if (paymethod=="debit")
  {
      ans1=<Card/>
  }
  else
  {
      ans1=<Upi/>
  }

  const paydone = () => {
    
    let api = "http://localhost:3000/orders";
    axios.post(api, input).then((res) => {
      console.log(res);
    });
    navigate("/paydone");
  };
  return (
    <>
      <div id="cart-head">
        <h1> Checkout </h1>
        <div id="cart-header">
          <p>
            <FontAwesomeIcon icon={faHouse} id="icon" /> &nbsp; Home&nbsp;&nbsp;
            <FontAwesomeIcon icon={faChevronRight} /> &nbsp; Checkout{" "}
          </p>
        </div>
      </div>
      <Container>
        <div id="checkout-main">
          <div id="cusform">
            <h3 style={{textAlign:"center"}}>Add Shipping Details</h3>
            <Form>
              <Form.Group className="mb-3" id="Form" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" onChange={handleInputorders}
                  name="name" />
              </Form.Group>
              <Form.Group className="mb-3" id="Form" controlId="formBasicEmail">
                <Form.Label>Town/City</Form.Label>
                <Form.Control type="text" onChange={handleInputorders}
                  name="city" />
              </Form.Group>
              <Form.Group className="mb-3" id="Form" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" onChange={handleInputorders}
                  name="address" />
              </Form.Group>
              <Form.Group className="mb-3" id="Form" controlId="formBasicEmail">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control type="text" onChange={handleInputorders}
                  name="pincode" />
              </Form.Group>
              <Form.Group className="mb-3" id="Form" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" onChange={handleInputorders}
                  name="number"/>
              </Form.Group>
              <Form.Group className="mb-3" id="Form" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleInputorders}
                  name="email" />
              </Form.Group>
            </Form>
          </div>
          <div id="paymethod"> <br />
            <div id="cart-Total">
              <div id="cart-t"> 
                <h1>Total</h1> <br />
                <div id="cart-h5">
                  <h5>
                    Includes all Tax (+$100) <br /> <hr />
                    <h5>Free Delhivery</h5>
                    Total <br />
                    
                  </h5>
                  <h5>
                    : ${amt} <br /> <hr />: $0  <br />: ${amt} <br />
                  </h5>
                </div>
                <br />
               
                <h4> Select Payment Method</h4>
                <div id="payradio">
                <div >
                  <input
                    type="radio"
                    name="paymethod"
                    value="cash"
                    onChange={handleInput}
                  />{" "}
                  Cash on Delivery <br />
                  <input
                    type="radio"
                    name="paymethod"
                    value="internet"
                    onChange={handleInput}
                  />{" "}
                  Internet Banking <br />
                  <input
                    type="radio"
                    name="paymethod"
                    value="debit"
                    onChange={handleInput}
                  />
                    Debit/Credit Card <br />
                  <input
                    type="radio"
                    name="paymethod"
                    value="upi"
                    
                    onChange={handleInput}
                  />{" "}
                  UPI/BHIM UPI <br />
                </div>
                <div>{ans1}</div>
                </div>
                <br />
                <p style={{ fontSize: "14px" }}>
                  Your personal data will be used to process your order, support
                  your <br /> experience throughout this website, and for other
                  purposes described <br /> in our
                  <span style={{ fontWeight: "650" }}> privacy policy. </span>
                </p>
                
               <a href="#"> <button onClick={paydone} id="paybutton"> 
            Place Order
          </button></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Checkout;
