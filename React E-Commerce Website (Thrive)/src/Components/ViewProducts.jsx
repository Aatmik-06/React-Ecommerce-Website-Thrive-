import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const ViewProducts=()=>{
  const [mydata, setMydata]=useState([]);
  const navigate= useNavigate();
  const loadData=()=>{
     let api="http://localhost:3000/Products";
     axios.get(api).then((res)=>{
         console.log(res.data);
         setMydata(res.data);
     })
  }
  useEffect(()=>{
     loadData();
  }, []);
 
 const myRecDel=(id)=>{
     let api=`http://localhost:3000/Products/${id}`
     axios.delete(api).then((res)=>{
          message.error("Your record Succesfully deleted!!!");
         loadData();
     })
 }
 const myEdit=(id)=>{
      navigate(`/editrec/${id}`)
 }

 const ans=mydata.map((key)=>{
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
        <td>
            <a href="#" onClick={()=>{myEdit(key.id)}}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </a> &nbsp;&nbsp;
            <a href="#" onClick={()=>{myRecDel(key.id)}} style={{color:"red"}} >
              <FontAwesomeIcon icon={faTrash} /> 
            </a>
        </td>

      </tr>
    
    </>
  )
})


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
            &nbsp; View Products&nbsp;
            <FontAwesomeIcon icon={faBookOpen} id="cheveron" /> &nbsp;
          </h4>
        </div>

    

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
            <th>Action</th>
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

export default ViewProducts;