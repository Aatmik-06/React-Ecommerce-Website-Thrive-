import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { qntyInc, qntyDec, itemRemove } from "./cartSlice";
import { Container } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart=()=>{
    const MyCart= useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
 
 
     const qtyIncrement=(id)=>{
          dispatch(qntyInc({id:id}));
     }
 
     const qtyDecrement=(id)=>{
          dispatch(qntyDec({id:id}))
     }
 
     const removeItem=(id)=>{
        dispatch(itemRemove({id:id}))
     }
 
     let totalAmount=0;
     const Data=MyCart.map((key)=>{
         totalAmount+=key.price*key.qnty;
         return(
             <>
                <tr>
                 <td> <img src={key.image} width="100" height="100" /> </td>
                 <td> {key.name} </td>
                 <td>$ {key.price}</td>
                 <td>{key.category}</td>
                
                 <td>
 
                 <a href="#" onClick={()=>{qtyDecrement(key.id)}}>
                 <FontAwesomeIcon icon={faCircleMinus} />
                     </a>    
                
 
                 <span style={{marginLeft:'10px', marginRight:'10px', fontWeight:'bold'}}>
                 {key.qnty}
                 </span>
                     
                     
                     <a href="#" onClick={()=>{qtyIncrement(key.id)}}>
                     <FontAwesomeIcon icon={faCirclePlus} />
                     </a>
                      
 
 
                 </td>
                 <td>$ {key.price*key.qnty} </td>
                  
                 <td>
                    <button onClick={()=>{removeItem(key.id)}} style={{backgroundColor:"transparent",border:"none"}}> <FontAwesomeIcon icon={faTrash} /></button>
 
                 </td>
                </tr>
             
             </>
         )
     })
     return(
         <>
        
            <div id="cart-head" >
            <h1> My Cart</h1>
            </div>
            <Container>
            <Table id="table" bordered variant="Light">
       <thead>
         <tr>
           <th>Image</th>
           <th>Product</th>
           <th>Price</th>
           <th>Category</th>
           <th>Quantity</th>
           <th>Total Price</th>
           <th>Remove  </th>
         </tr>
       </thead>
       <tbody>
          {Data}
          <tr>
           <th> </th>
           <th> </th>
           <th> </th>
           <th> </th>
           <th> Total Amount: </th>
           <th>$ {totalAmount}  </th>
           <th> </th>
         </tr>
         </tbody>
         </Table>
         </Container>
 
            
         </>
     )
}
export default Cart;