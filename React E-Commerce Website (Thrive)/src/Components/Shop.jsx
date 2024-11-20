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
    
    const loadData=()=>{
        let api="http://localhost:3000/shop";
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
        <Container style={{display:"flex"}}>
          <div id="shop-header">
            <h3><FontAwesomeIcon icon={faHouse} /> Home<FontAwesomeIcon icon={faChevronRight} />  Products</h3>
          </div>
        <aside>
          <div id="aside">
          <Link style={{textDecoration:"none"}} to="/Phones">  <p id="shop-side-items"> Ipad Phone & Tablets <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <Link style={{textDecoration:"none"}} to="/Virtual">  <p id="shop-side-items"> Virtual devices & Planer <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <Link style={{textDecoration:"none"}} to="/Wireless">  <p id="shop-side-items"> Wireless & Watches <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <Link style={{textDecoration:"none"}} to="/Laptops">  <p id="shop-side-items"> Computers Monitor & Laptop <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <Link style={{textDecoration:"none"}} to="/Exercise">  <p id="shop-side-items"> Exercise Bike & Shaver Clean <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <Link style={{textDecoration:"none"}} to="/Kettel">  <p id="shop-side-items"> Spinning Reel & Kettle <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <Link style={{textDecoration:"none"}} to="/headset">  <p id="shop-side-items"> Camera Bluetooth & Headset <FontAwesomeIcon icon={faChevronRight} /> </p>  </Link>
          <br /><br />
          <img src="src/assets/Images/o-banner3.jpg" alt="" style={{height:"100%",width:"100%"}} />
        </div>
        </aside>
        <div id="shop-main">
          <div id="shop-head">
          <img src="src/assets/Images/shop-banner.jpg" alt="" />
          </div>
          <div id="shop-items">
            {ans}
            </div>
          </div>
          </Container>
        </>
    )
}
export default Shop;