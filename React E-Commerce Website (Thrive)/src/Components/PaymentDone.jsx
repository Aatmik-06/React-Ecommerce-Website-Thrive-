import LoaderComp from "./Loader";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Link from "antd/es/typography/Link";
import Marquee from "react-fast-marquee";
import Card from "react-bootstrap/Card";
import phonebanner1 from "../assets/Images/o-banner.jpg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const PaymentDone=()=>{
    const [isLoader, setIsLoader]=useState(true);


    setTimeout(()=>{
        setIsLoader(false);
    }, 3000);

    return(
        <>

<div id="cart-head">
        <h1> Order Placed </h1>
        <div id="cart-header">
          <p>
            <FontAwesomeIcon icon={faHouse} id="icon" /> &nbsp; Home&nbsp;&nbsp;
            <FontAwesomeIcon icon={faChevronRight} /> &nbsp; Order Placed{" "}
          </p>
        </div>
      </div>
        {isLoader?(
             <div style={{width:"100px", margin:"auto", paddingTop:"80px"}}>
             <LoaderComp/>
             </div>
        ):(
            
        <h2 align="center" style={{color:"green",marginTop:"80px"}}><FontAwesomeIcon style={{fontSize:"80px"}} icon={faCircleCheck} /> <br /> <br />Order Succesfully Placed <br/> <h4> Order will be Delivered within 6 to 7 days </h4> </h2>
        )}
        
        <Container style={{marginTop:"100px"}}>
       
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

export default PaymentDone;