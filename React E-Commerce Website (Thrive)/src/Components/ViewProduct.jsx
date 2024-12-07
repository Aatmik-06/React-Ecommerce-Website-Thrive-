import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { Container } from "react-bootstrap";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
const ViewProduct=()=>{
    const {id} = useParams();
    const [mydata, setMydata]=useState({});
    const dispatch= useDispatch();
    const loadData=()=>{
        let api=`http://localhost:3000/shop/${id}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })   
    }
    useEffect(()=>{
        loadData();
    }, []);

    const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
        dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
       }


    return(
        <>
        <Container>
        <div id="shop-header">
            <p><FontAwesomeIcon icon={faHouse} id="icon"  /> &nbsp; Home&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} /> &nbsp; Product Info </p>
          </div>
         <div id="view-product">
            <div >
               <img src={mydata.image}  />
            </div>
        <div id="view-desc">
            <h3> {mydata.name} </h3> <br />
            <div style={{display:"flex"}}> <div id="best-seller">Best Seller</div><FontAwesomeIcon icon={faBolt} id="lightning-icon" /> &nbsp;&nbsp;&nbsp;<p style={{fontWeight:"700"}}>Selling fast! 56 people have this in their carts.</p> </div> <br />
            <h3>Price - ${mydata.price} </h3> <br />
            <h4> {mydata.category} </h4> <br />
            <h5> {mydata.description} </h5>  <br />
            <h3> {mydata.type} Stock</h3> <br />
            <button 
             onClick={()=>{cartDataAdd(mydata.id, mydata.name, mydata.price, mydata.category, mydata.description, mydata.image)}}
             >AddToCart     
        </button>
        </div>
        </div>
        
        
        </Container>
        </>
    )
}
export default ViewProduct;