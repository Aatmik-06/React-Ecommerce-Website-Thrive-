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
import laptop from '../assets/Images/laptop.webp';
import ipad from '../assets/Images/product-cat-1.png';
import watch from "../assets/Images/product-cat-3.webp";
import virtual from "../assets/Images/product-cat-2.webp";
import bluetooth from "../assets/Images/product-cat-7.webp";
import hero from "../assets/Images/slider-1.webp"
import { useNavigate } from "react-router-dom";


const Home = () => {

 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();
 const navigate = useNavigate();

 const loadData=()=>{
    let api="http://localhost:3000/shop/?type=new";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
 }

 useEffect(()=>{
    loadData();
 }, []);

 const gotoview=(id)=>{
  navigate(`/viewProduct/${id}`);
 }


 const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
  dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
 }


const ans=mydata.map((key)=>{
  return(
    <>
    <div style={{width:"19rem", marginTop:"10px",border:"none",background:"rgb(247,247,247)"}} id="c1">
      <div style={{textDecoration:"none",color:"rgb(33, 37, 41)"}} onClick={()=>{gotoview(key.id)}}>
      <button id="sb-1">Sale</button>
      <img src={key.image} id="card-img" style={{width:"18rem"}} />
      <h5> {key.name} </h5>
        <span style={{fontWeight:'bold'}}>  ${key.price} </span> 
        </div>
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
              <h1  id="h1-homecontent">|</h1>
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
            <img src={hero} alt="slider-img" />
          </div>
        </Container>
      </div>
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
          <span id="anim">New Arrivals</span>
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
                    src={laptop} style={{backgroundColor:"rgb(239,243,237)",paddingBottom:"11.5px"}}
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
                    src={ipad} style={{backgroundColor:"RGB(119 167 215)",paddingBottom:"2px"}}
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
                    src={watch} style={{backgroundColor:"rgb(223,243,216)",paddingBottom:"49px"}}
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
                    src={virtual} style={{backgroundColor:"RGB(239 205 244)"}}
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
                    src={bluetooth} style={{backgroundColor:"RGB(130 148 165)"}}
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
          <div id="home-offers-foot">
            <p>Apple iPhone 13 Pro</p>
            <h1 >The wait is over : <br />iphone 13 pro max</h1> <br />
            <p>Last call for up to <span style={{fontSize:"25px",fontWeight:"700"}} id="anim">32%</span> off!</p>
            <Link to="/Shop"><button>Shop Now</button></Link>
          </div>
         
      </Container>
    </>
  );
};
export default Home;

