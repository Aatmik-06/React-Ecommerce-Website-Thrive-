import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

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
        <aside>
       
        </aside>
        <div id="shop-items">
            {ans}

          </div>
          </Container>
        </>
    )
}
export default Shop;