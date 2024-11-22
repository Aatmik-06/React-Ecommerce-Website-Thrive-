import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { qntyInc, qntyDec, itemRemove } from "./cartSlice";
import { Container } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "antd/es/typography/Link";
import Marquee from "react-fast-marquee";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    const MyCart= useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const gotoCheckout=(tamount)=>{
        navigate(`/Checkout/${tamount+100}`);
    }
 
 
     const qtyIncrement=(id)=>{
          dispatch(qntyInc({id:id}));
          scrollTo(1000)
     }
 
     const qtyDecrement=(id)=>{
          dispatch(qntyDec({id:id}))
     }
 
     const removeItem=(id)=>{
        dispatch(itemRemove({id:id}))
     }
 
     let totalAmount=0;
     const Data=MyCart.map((key)=>{
         totalAmount+=key.price*key.qnty;
         return(
             <>
                <tr>
                 <td> <img src={key.image} width="100" height="100" /> </td>
                 <td> {key.name} </td>
                 <td>$ {key.price}</td>
                 <td>{key.category}</td>
                 <td>
                 <button id="btn-incri" onClick={()=>{qtyDecrement(key.id)}}>
                 <FontAwesomeIcon icon={faCircleMinus} />
                     </button>    
                 <span style={{marginLeft:'10px', marginRight:'10px', fontWeight:'bold'}}>
                 {key.qnty}
                 </span>   
                     <button id="btn-incri" onClick={()=>{qtyIncrement(key.id)}}>
                     <FontAwesomeIcon icon={faCirclePlus} />
                     </button>
                 </td>
                 <td>$ {key.price*key.qnty} </td>
                 <td>
                    <button onClick={()=>{removeItem(key.id)}} style={{backgroundColor:"transparent",border:"none",color:"red"}}> <FontAwesomeIcon icon={faTrash} /></button>
 
                 </td>
                </tr>
             
             </>
         )
     })
     return(
         <>
        
            <div id="cart-head" >
            <h1> My Cart</h1>
            </div>
            <Container>
            <Table id="table" bordered variant="Light" responsive>
       <thead >
         <tr>
           <th>Image</th>
           <th>Product</th>
           <th>Price</th>
           <th>Category</th>
           <th>Quantity</th>
           <th>Total Price</th>
           <th>Remove  </th>
         </tr>
       </thead>
       <tbody >
          {Data}
          
         </tbody>
         </Table> <br />
         <div id="cart-Total">
            <div id="cart-t">
            <h1>Cart Total</h1> <br />
            <div id="cart-h5">
                <h5>
                 SubTotal      <br /> 
                 Includes all Tax (+$100)    <br /> <hr />
                 Total    <br />
                 </h5>
                 <h5>
                : ${totalAmount} <br /> 
                : ${totalAmount+100} <br /> <hr />
                : ${totalAmount+100} <br />
                 </h5>
            </div>
            <br />
            <button onClick={()=>{gotoCheckout(totalAmount)}}>Proceed To Order</button> 
       
            </div>
         </div>
         </Container>
         <Container style={{marginTop:"50px"}}>
         <div style={{ display: "flex" }}>
            {" "}
            <h2 style={{ color: "rgb(245, 9, 99)" }}> |</h2>{" "}
            <h2
              style={{
                color: "black",
                fontWeight: 600,
                marginTop: "2px",
                marginLeft: "7px",
              }}
            >
              Shop More
            </h2>{" "}
          </div>
        
         <Marquee pauseOnHover speed={"100"}> 
            <div id="h2-cont" >
              <Link
                to="/Shop"
                style={{
                  fontSize: "17px",
                  color: "rgb(82, 82, 88)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <Card style={{ width: "18rem" , marginLeft:"30px"}} id="home-card1"  >
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/laptop.webp" style={{backgroundColor:"rgb(239,243,237)",paddingBottom:"11.5px"}}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "17px", color: "rgb(82, 82, 88)" }}
                    >
                      Laptop & Computer Monitors
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
              <Link
                to="/Shop"
                style={{
                  fontSize: "17px",
                  color: "rgb(82, 82, 88)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <Card style={{ width: "18rem", marginLeft:"30px" }} id="home-card1">
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-1.png"style={{backgroundColor:"RGB(119 167 215)",paddingBottom:"2px"}}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "17px", color: "rgb(82, 82, 88)" }}
                    >
                      Ipad & Iphones 
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
              <Link
                to="/Shop"
                style={{
                  fontSize: "17px",
                  color: "rgb(82, 82, 88)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <Card style={{ width: "18rem" , marginLeft:"30px"}} id="home-card1">
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-3.webp" style={{backgroundColor:"rgb(223,243,216)",paddingBottom:"49px"}}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "17px", color: "rgb(82, 82, 88)"}}
                    >
                      Wireless & And Watches
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
              <Link
                to="/Shop"
                style={{
                  fontSize: "17px",
                  color: "rgb(82, 82, 88)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <Card style={{ width: "18rem" , marginLeft:"30px"}} id="home-card1" >
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-2.webp" style={{backgroundColor:"RGB(239 205 244)"}}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "17px", color: "rgb(82, 82, 88)" }}
                    >
                      {" "}
                      Planner & Virtual
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
              <Link
                to="/Shop"
                style={{
                  fontSize: "17px",
                  color: "rgb(82, 82, 88)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <Card style={{ width: "18rem", marginLeft:"30px" }} id="home-card1">
                  <Card.Img
                    variant="top"    
                    src="src/assets/Images/product-cat-7.webp" style={{backgroundColor:"RGB(130 148 165)"}}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "17px", color: "rgb(82, 82, 88)" }}
                    >
                     Buletooth Headset
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            </Marquee>
            </Container>
 
            
         </>
     )
}
export default Cart;