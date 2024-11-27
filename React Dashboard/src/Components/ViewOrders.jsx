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
const ViewOrders=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate= useNavigate();
    const loadData=()=>{
       let api="http://localhost:3000/orders";
       axios.get(api).then((res)=>{
           console.log(res.data);
           setMydata(res.data);
       })
    }
    useEffect(()=>{
       loadData();
    }, []);
   
   const myRecDel=(id)=>{
       let api=`http://localhost:3000/orders/${id}`
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
          <td> {key.name} </td>
          <td> {key.city} </td>
          <td> {key.address} </td>
          <td> {key.pincode} </td>
          <td> {key.number} </td>
          <td> {key.email} </td>
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
              &nbsp; View Orders&nbsp;
              <FontAwesomeIcon icon={faBookOpen} id="cheveron" /> &nbsp;
            </h4>
          </div>
  
      
  
      <Table responsive="sm" id="table" striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>Name</th>
              <th>City </th>
              <th>Address</th>
              <th>Pin Code</th>
              <th>Number</th>
              <th>Email</th>
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
export default ViewOrders