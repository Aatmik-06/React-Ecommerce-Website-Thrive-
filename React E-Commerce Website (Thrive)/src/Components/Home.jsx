import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from './cartSlice';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

  const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();

 const loadData=()=>{
    let api="http://localhost:3000/shop";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);

 const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
  dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
 }



  
 const ans=mydata.map((key)=>{
  return(
   <>
    <div style={{width:"19rem", marginTop:"10px",border:"none",background:"rgb(247,247,247)"}} id="c1" >
      <button id="sb-1">Sale</button>
      <img src={key.image} id="card-img" style={{width:"18rem"}} />
      <h5> {key.name} </h5>
        <span style={{fontWeight:'bold'}}>  ${key.price} </span> 
        <button id="b1" style={{border:"none",color:"white"}}
       onClick={()=>{cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image)}} >  <FontAwesomeIcon icon={faCartShopping} />&nbsp;  Add to cart</button>
    </div> 
  
   </>
  )

})






  return (
    <>
      <div id="hero">
        <Container id="hero-container" >
      
          <div id="hero-content">
            
            <p style={{ display: "flex" }}>
              <h1 style={{ color: "black", fontSize: "50px" }}>|</h1>
              <span id="head-p">
                {" "}
                Best Ear <br />
                Headphones{" "}
              </span>
            </p>
            <h1 id="head-h1">
              Music To <br /> <span id="typewriter"> Fill Your Heart </span>{" "}
            </h1>
            <Link to="/Shop">
              {" "}
              <button>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>{" "}
            </Link>
          </div>
          <div id="hero-img">
            <img src="src/assets/Images/slider-1.webp" alt="slider-img" />
          </div>
        </Container>
      </div>
      <Container>
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
        <hr style={{ color: "black" }} />
        <div id="popular-products">
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
              Popular Products
            </h2>{" "}
          </div>
          <div id="popular-items">
            {ans}

          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;


