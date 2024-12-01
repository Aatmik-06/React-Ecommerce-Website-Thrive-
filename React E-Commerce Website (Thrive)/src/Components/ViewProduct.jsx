import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
// import { addToCart } from './cartSlice';

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

           
         
        </>
    )
}
export default ViewProduct;