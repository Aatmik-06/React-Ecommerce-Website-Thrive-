import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';



const SearchProducts=()=>{
    const [empname, setempname]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleChange=(e)=>{
        let product= e.target.value;
        setempname(product);
        let api=`http://localhost:3000/Products`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        let str = key.productdesc.toLowerCase();
        let mystatus = str.includes(empname.toLowerCase());
        console.log(mystatus);
         if (mystatus)
            {  
          return(
            <>
             <tr>
             <td> {key.productdesc} </td>
             <td> {key.category} </td>
             <td> {key.size} </td>
             <td> {key.brand} </td>
             <td> {key.price} </td>
             <td> {key.stock} </td>
             <td> {key.orders} </td>
             <td> {key.sales} </td>
              </tr>
            </>
          )
        }
    })

    if(handleChange.value!=" "){
    
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
            &nbsp; Search Products&nbsp;
            <FontAwesomeIcon icon={faMagnifyingGlass} id="cheveron" /> &nbsp;
          </h4>
        </div>


        <h1>Search By Procuct Name</h1>
        
        <FloatingLabel
        controlId="floatingInput"
        label="Search Here"
        className="mb-3" 
        value={empname} onChange={handleChange}
      >
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
        
    <Table responsive="sm" id="table" striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Product description</th>
            <th>Category</th>
            <th>Size</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Orders</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
        {ans}
        </tbody>
      </Table>
        </Container>
        </>
    )
 }
}

export default SearchProducts;

