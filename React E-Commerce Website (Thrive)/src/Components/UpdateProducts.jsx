import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState ,useEffect } from "react";
import { message } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProducts=()=>{
    const {myid} =useParams();
    const [mydata, setMydata]=useState({});
    const loadData=()=>{
      let api=`http://localhost:3000/Products/${myid}`;
      axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
      })
    }
    useEffect(()=>{
        loadData();
    }, []);
    const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setMydata(values=>({...values, [name]:value}))
          console.log(mydata);
    }
   const handleSubmit=(e)=>{ 
      e.preventDefault();
    let api=`http://localhost:3000/Products/${myid}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            productdesc:"",
            category:"",
            size:"",
            brand:"",
            price:"",
            stock:"",
            orders: "",
            sales: ""
        })
    })
   }
   

    return(
        <>
        <Container id="products-content">
        <div id="head-upload">
          <h4>
            Products Dashboard &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Dashboard&nbsp;
            <FontAwesomeIcon icon={faHouse} /> &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Update Products&nbsp;
            <FontAwesomeIcon icon={faFilePen} id="cheveron" /> &nbsp;
          </h4>
        </div>
        <div id="form-main">
          <h1>
            Edit Product&nbsp;{" "}
            <FontAwesomeIcon icon={faBriefcase} id="cheveron" />{" "}
          </h1>
          <form action="" id="form">
            <div id="form-label">
              <FloatingLabel
                controlId="floatingInput"
                label="Product Name/Description"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.productdesc}
                  name="productdesc"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Category (Men or Women)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.category}
                  name="category"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Size"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.size}
                  name="size"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Brand"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.brand}
                  name="brand"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Price"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.price}
                  name="price"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Stock"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.stock}
                  name="stock"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Orders"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.orders}
                  name="orders"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Sales"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleInput}
                  value={mydata.sales}
                  name="sales"
                  placeholder=""
                />
              </FloatingLabel>
            </div>
            <div className="d-grid gap-2">
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleSubmit}
              >
                Update Product
              </Button>
            </div>
          </form>
        </div>
      </Container>
        </>
    )
}

export default UpdateProducts;