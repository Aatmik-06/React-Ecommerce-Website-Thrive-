import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { message } from "antd";
import axios from "axios";
const AddProducts = () => {
  const [input, setinput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = () => {
    let api = "http://localhost:3000/Products";
    axios.post(api, input).then((res) => {
      console.log(res);
      message.success("Product Successfully Added!!!");
    });
  };

  return (
    <>
      <Container id="products-content">
        <div id="head-upload">
          <h4>
            Products Dashboard &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Dashboard&nbsp;
            <FontAwesomeIcon icon={faHouse} /> &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Upload Products&nbsp;
            <FontAwesomeIcon icon={faBriefcase} id="cheveron" /> &nbsp;
          </h4>
        </div>
        <div id="form-main">
          <h1>
            Add Product&nbsp;{" "}
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
                Upload Product
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
export default AddProducts;
