import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const Home = () => {
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
      {/* <marquee behavior="scroll" direction="right" scrollamount="20" > */}
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
                <Card style={{ width: "18rem" }} id="home-card1">
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-1.webp"
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
                <Card style={{ width: "18rem" }} id="home-card1">
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-3.jpg"
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
                <Card style={{ width: "18rem"}} id="home-card1" >
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-2.webp" style={{width:"280px",height:"192px",backgroundColor:"RGB(219 233 255)"}}
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
                <Card style={{ width: "18rem" }} id="home-card1">
                  <Card.Img
                    variant="top"
                    src="src/assets/Images/product-cat-7.jpg"
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "17px", color: "rgb(82, 82, 88)" }}
                    >
                      Camera Buletooth & Headset
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            {/* </marquee> */}
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
        </div>
      </Container>
    </>
  );
};
export default Home;


