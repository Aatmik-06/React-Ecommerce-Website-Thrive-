import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Offcanvas from 'react-bootstrap/Offcanvas';
const Shop=()=>{
    const [mydata, setMydata]= useState([]);
    const dispatch= useDispatch();
    
    const loadData=()=>{
        let api="http://localhost:3000/shop/?page=one";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
     }

     const showData=()=>{
        let api="http://localhost:3000/shop";
        axios.get(api).then((res)=>{
            setShowFilter(false);
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
    return(
        <>
        <Container >
          <div id="shop-header">
            <p><FontAwesomeIcon icon={faHouse} id="icon"  /> &nbsp; Home&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} /> &nbsp; Shop &nbsp;<FontAwesomeIcon icon={faChevronRight}/> &nbsp;Products</p>
          </div>
          <div id="shop-cont">
        <aside>
          <div id="aside">
          {/* <div id="aside-items-1">  */}
          <Link style={{textDecoration:"none"}}  to="/Shop">  <p id="shop-side-items"> All Categories <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>                             
          <Link style={{textDecoration:"none"}}  to="/Phones">  <p id="shop-side-items"> Ipad Phone & Tablets <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Virtual">  <p id="shop-side-items"> Virtual devices & Planer <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Wireless">  <p id="shop-side-items"> Wireless & Watches <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Laptops">  <p id="shop-side-items"> Computers Monitor & Laptop <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Exercise">  <p id="shop-side-items"> Exercise Bike & Shaver Clean <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Kettel">  <p id="shop-side-items"> Spinning Reel & Kettle <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/headset">  <p id="shop-side-items"> Camera Bluetooth & Headset <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          {/* </div> */}
          <br /><br />
        <Link to="/">  <img src="src/assets/Images/o-banner3.jpg" alt="" id="aside-img" style={{height:"100%",width:"100%"}} /></Link>
        </div>
        </aside>
        <div id="shop-main">
          <div id="shop-head">
         <Link to="/"> <img src="src/assets/Images/shop-banner.jpg" alt="" /> </Link>
         <div id="items-result"><h6><span style={{color:"rgb(120, 120, 120)",textAlign:"left"}}> Showing 1–15 of 20 results </span></h6></div>
          </div>
          <div id="shop-items">
            {ans}
            </div>
            <div id="pages-number">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </div>
          </div>
          </Container>
        </>
    )
}
export default Shop;