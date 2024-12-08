import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { Container } from "react-bootstrap";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import Link from "antd/es/typography/Link";
import Card from "react-bootstrap/Card";
import laptop from "../assets/Images/laptop.webp";
import ipad from "../assets/Images/product-cat-1.png";
import watch from "../assets/Images/product-cat-3.webp";
import virtual from "../assets/Images/product-cat-2.webp";
import bluetooth from "../assets/Images/product-cat-7.webp";
import hero from "../assets/Images/slider-1.webp";
import truck from '../assets/Images/g-truck.png';
import credit from '../assets/Images/g-credit.png';
import safety from '../assets/Images/g-safety.png';
import { useNavigate } from "react-router-dom";
const ViewProduct = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    let api = `http://localhost:3000/shop/${id}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const cartDataAdd = (id, name, price, categ, desc, myimg) => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        category: categ,
        description: desc,
        image: myimg,
        qnty: 1,
      })
    );
  };

  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("20:12:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 73000);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);


  const gotobuy=()=>{
    navigate(`/Cart`);
  }
 

  

  return (
    <>
      <Container>
        <div id="shop-header">
          <p>
            <FontAwesomeIcon icon={faHouse} id="icon" /> &nbsp; Home&nbsp;&nbsp;
            <FontAwesomeIcon icon={faChevronRight} /> &nbsp; Product Info{" "}
          </p>
        </div>
        <div id="view-product">
          <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
            <img src={mydata.image} id="view-img" />
          </div>
          <div id="view-desc">
            <h3 style={{ marginBottom: "25px" }}> {mydata.name} </h3>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              {" "}
              <div id="best-seller">Best Seller</div>
              <FontAwesomeIcon icon={faBolt} id="lightning-icon" />{" "}
              &nbsp;&nbsp;&nbsp;
              <p style={{ fontWeight: "700" }}>
                Selling fast! 56 people have this in their carts.
              </p>{" "}
            </div>
            <h3
              style={{
                color: "rgb(221,29,21)",
                fontWeight: "400",
                marginBottom: "10px",
              }}
            >
              ${mydata.price} <strike> ${mydata.Originalprice} </strike>{" "}
            </h3>
            <div id="timer">
              <p>
                <FontAwesomeIcon icon={faClock} /> HURRY UP! SALE ENDS IN:
                <h5 style={{ marginTop: "6px" }}>
                  <span style={{ color: "rgb(69, 69, 69)" }}>Time Left :</span>{" "}
                  {timer}
                </h5>{" "}
              </p>
            </div>{" "}
            <br />
            <h6 style={{ marginBottom: "12px" }}> {mydata.description} </h6>
            <h4 style={{ marginBottom: "12px" }}>Stock : {mydata.type} </h4>
            <h6 style={{ marginBottom: "12px" }}>Category : {mydata.category} </h6>
            <button
              onClick={() => {
                cartDataAdd(
                  mydata.id,
                  mydata.name,
                  mydata.price,
                  mydata.category,
                  mydata.description,
                  mydata.image
                );
              }}
            >
              Add To Cart
            </button>
            <button id="buy1" onClick={gotobuy}>Buy Now</button>
          </div>
        </div>
       
        <div id="view-cont2">
          <div  style={{width:"200px",textAlign:"center"}}>  <img src={safety} alt="" /> <p>Return within 30 days of purchase. Duties & taxes are non-refundable.</p></div>
          <div style={{width:"200px",textAlign:"center"}}> <img src={truck} alt="" /><p>Estimate delivery time: <br />12-26 days(International),<br />3-6 days (India).</p></div>
          

            
        </div>
        <div id="view-description">
          <div id="input-div">
          <h4  > Description</h4> 
          <h4  > Review</h4>
          <h4  > Shipping</h4>
          <h4  > Return Policy</h4>
          </div>
          <hr style={{width:"100%"}} />
          <p id="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
            possimus ipsam! Temporibus amet distinctio sequi dolores odio cumque
            voluptatibus laborum, neque vel magni. Recusandae dignissimos illum
            vitae aliquid minus, similique, libero dolorem assumenda totam
            reprehenderit iure voluptates perferendis sed amet tenetur ullam
            veniam unde quia quisquam rem eligendi facilis! Et ex debitis odio
            nobis suscipit dolore facere voluptatem earum optio odit, minus illo
            amet vitae, non labore numquam illum aperiam exercitationem
            repudiandae ducimus nihil id necessitatibus mollitia doloremque.
            Optio quo sapiente vitae, molestias illum accusantium eos voluptas
            dignissimos aperiam obcaecati quisquam reprehenderit corrupti quidem
            sunt ad non sequi neque? Magnam.
            <span style={{display:"flex" ,justifyContent:"space-evenly",marginTop:"20px",flexWrap:"wrap"}}>
            <div>
            <h5>Technical Details</h5>
            <ul >
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            </div>
              <div>
              <h5>Features</h5>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            </div>
            <div>
            <h5>Product Details</h5>
            <ul >
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            </div>
            <div>
            <h5>Additional Information</h5>
            <ul >
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            </div>

            </span>
          </p>
           <p>
            
           </p>
        </div>{" "}
        <br />
        <br />
        <br />
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
            <span id="anim">People Also Bought</span>
          </h2>{" "}
        </div>
        <Marquee pauseOnHover speed={"50"}>
          <div id="h2-cont">
            <Link
              to="/Shop"
              style={{
                fontSize: "17px",
                color: "rgb(82, 82, 88)",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <Card
                style={{ width: "18rem", marginLeft: "30px" }}
                id="home-card1"
              >
                <Card.Img
                  variant="top"
                  src={laptop}
                  style={{
                    backgroundColor: "rgb(239,243,237)",
                    paddingBottom: "11.5px",
                  }}
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
              <Card
                style={{ width: "18rem", marginLeft: "30px" }}
                id="home-card1"
              >
                <Card.Img
                  variant="top"
                  src={ipad}
                  style={{
                    backgroundColor: "RGB(119 167 215)",
                    paddingBottom: "2px",
                  }}
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
              <Card
                style={{ width: "18rem", marginLeft: "30px" }}
                id="home-card1"
              >
                <Card.Img
                  variant="top"
                  src={watch}
                  style={{
                    backgroundColor: "rgb(223,243,216)",
                    paddingBottom: "49px",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "17px", color: "rgb(82, 82, 88)" }}
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
              <Card
                style={{ width: "18rem", marginLeft: "30px" }}
                id="home-card1"
              >
                <Card.Img
                  variant="top"
                  src={virtual}
                  style={{ backgroundColor: "RGB(239 205 244)" }}
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
              <Card
                style={{ width: "18rem", marginLeft: "30px" }}
                id="home-card1"
              >
                <Card.Img
                  variant="top"
                  src={bluetooth}
                  style={{ backgroundColor: "RGB(130 148 165)" }}
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
  );
};
export default ViewProduct;
