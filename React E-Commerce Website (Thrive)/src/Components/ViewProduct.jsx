import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const ViewProduct=()=>{
    const {id} = useParams();
    const [mydata, setMydata]=useState({});
    const dispatch= useDispatch();

    const loadData=()=>{
        let api=`http://localhost:3000/shop/${id}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
        
    }
    
    useEffect(()=>{
        loadData();
    }, []);

    const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
        dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
       }

  
    return(
        <>
        <div>
            <div>
                {id}
                <img src={mydata.image} height={100} alt="" />
                {mydata.name}
                {mydata.price}
            </div>
        </div>
        
        <button
             onClick={()=>{cartDataAdd(mydata.id, mydata.name, mydata.price, mydata.category, mydata.description, mydata.image)}}
             >AddToCart     
        </button>
            

           
         
        </>
    )
}
export default ViewProduct;