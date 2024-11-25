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
const Wireless =()=>{
    const [mydata, setMydata]= useState([]);
    const dispatch= useDispatch();
    const [lowPrice, setLowPrice]=useState("");
    const [highPrice, setHighPrice]=useState("");
    const [showFilter, setShowFilter]=useState(true);
    
    const loadData=()=>{
        let api="http://localhost:3000/shop/?category=Wireless  Watches";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
     }
     const showData=()=>{
      let api="http://localhost:3000/shop/?category=Wireless  Watches";
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
       useEffect(()=>{
        if (lowPrice=="" && highPrice=="")
        {
            setShowFilter(true);
        }
     })
       
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

const ans1=mydata.map((key)=>{
if (key.price>=lowPrice && key.price<=highPrice)
  {
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
  }
})
    return(
        <>
          <Container >
          <div id="shop-header">
            <p><FontAwesomeIcon icon={faHouse} id="icon"  /> &nbsp; Home&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} /> &nbsp; Shop </p>
          </div>
          <div id="shop-cont">
        <aside>
          <div id="aside">
          {/* <div id="aside-items-1">  */}
          <Link style={{textDecoration:"none"}}  to="/Shop">  <p id="shop-side-items"> All Categories <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>                          
          <Link style={{textDecoration:"none"}}  to="/PhonesShop">  <p id="shop-side-items"> Ipad Phone & Tablets <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>   
          <Link style={{textDecoration:"none"}}  to="/Virtual">  <p id="shop-side-items"> Virtual devices & Planer <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Wireless">  <p id="shop-side-items"> Wireless & Watches <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>     <hr />
          <Link style={{textDecoration:"none"}}  to="/Computers">  <p id="shop-side-items"> Computers Monitor & Laptop <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Exercise">  <p id="shop-side-items"> Exercise Bike & Shaver Clean <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/Kettel">  <p id="shop-side-items"> Spinning Reel & Kettle <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          <Link style={{textDecoration:"none"}}  to="/headset">  <p id="shop-side-items"> Camera Bluetooth & Headset <FontAwesomeIcon icon={faChevronRight} style={{marginTop:"5px"}}/> </p>  </Link>    
          {/* </div> */}
          <br /> <br />
          <h5>Filters</h5>
          <hr />
          <h6 style={{fontSize:"18px"}}>Price Range </h6>
          $ From <input type="text" value={lowPrice}
           onChange={(e)=>{setLowPrice(e.target.value)}} style={{width:"100%"}}/>
           <br />
          $ To <input type="text" value={highPrice}
          onChange={(e)=>{setHighPrice(e.target.value)}} style={{width:"100%"}}/>
            <br/> <br />
            <button onClick={showData} id="btn-filter"> Show Products</button>

          <br /><br /> <br /> <br />
          
        <Link to="/PhonesShop">  <img src="src/assets/Images/o-banner3.jpg" alt="" id="aside-img" style={{height:"100%",width:"100%"}} /></Link>
        </div>
        <div id="aside-d3">
           <div id="aside-d3-img">
          <img style={{height:"60px",marginTop:"15px"}} src="src/assets/Images/g-truck.png" alt="" />  <br />
         <img style={{height:"60px",marginTop:"12px",marginBottom:"12px"}} src="src/assets/Images/g-tele.png" alt="" /> <br />
        <img style={{height:"60px"}} src="src/assets/Images/g-safety.png" alt="" /><br />
        </div>  
        <div>
          <p id="aside-d3-11"  style={{fontSize:"17px",fontWeight:"600"}}>Free shipping<br /> <span style={{fontSize:"14px",fontWeight:"400",color:"rgb(150, 150, 150)"}}>Free all Over India</span></p>          
          <p id="aside-d3-12"  style={{fontSize:"17px",fontWeight:"600"}}>Premium Support<br /> <span style={{fontSize:"14px",fontWeight:"400",color:"rgb(150, 150, 150)"}}>Support 24 hours a day</span></p>  
         <p  id="aside-d3-13" style={{fontSize:"17px",fontWeight:"600"}}>30 Days Return<br /> <span style={{fontSize:"14px",fontWeight:"400",color:"rgb(150, 150, 150)"}}>Support for Customers</span></p> 
         </div>
        </div>
        </aside>
        <div id="shop-main">
          <div id="shop-head">
          <Link to="/Shop"> <img src="src/assets/Images/shop-banner.jpg" alt="" /> </Link>
         <div id="items-result"><h6><span style={{color:"rgb(120, 120, 120)",textAlign:"left"}}> Showing 1–15 of 20 results </span></h6></div>
          </div>
            <div id="shop-items">
                {showFilter?ans:ans1}      
            </div>  
            
          </div>
          </div>
          <Container>
          <div id="home-offers">
            <h1 >Free Shipping on Orders Above $50</h1> <br />
            <Link to="/Shop"><button>Shop Now</button></Link>
          </div>
        </Container>
          </Container>
        </>
    )
}
export default Wireless;