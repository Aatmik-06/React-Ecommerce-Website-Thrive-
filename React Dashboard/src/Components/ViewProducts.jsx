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
     let api="http://localhost:3000/shop";
     axios.get(api).then((res)=>{
         console.log(res.data);
         setMydata(res.data);
     })
  }
  useEffect(()=>{
     loadData();
  }, []);
 
 const myRecDel=(id)=>{
     let api=`http://localhost:3000/shop/${id}`
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
        <td> <img src={key.image} id="card-img" style={{width:"5rem"}} /> </td>
        <td> {key.name} </td>
        <td> {key.category} </td>
        <td> {key.description} </td>
        <td> {key.type} </td>
        <td> {key.price} </td>
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
            <th>Product Image</th>
            <th>Product </th>
            <th>Category</th>
            <th>Description</th>
            <th>Stock Type</th>
            <th>Price</th>
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