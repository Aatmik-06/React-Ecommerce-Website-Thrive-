
import { createSlice } from "@reduxjs/toolkit";
import {  message } from 'antd';
const cartSlice= createSlice({
    name:"mycart",
    initialState:{
        cart:[],
        search:""
    },
    reducers:{
        addToCart:(state, actions)=>{
            const myData= state.cart.filter(key=>key.id==actions.payload.id);
            if (myData.length>=1)
            {
                message.error("Already Added")
            }
            else 
            {
                state.cart.push(actions.payload);
                message.success("Product Added");
            }
        },
        qntyInc:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
        },
        qntyDec:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    if (state.cart[i].qnty>1)
                    { 
                      state.cart[i].qnty--;
                    }
                    else 
                    {
                        message.error("Quantity must be greater than 1  ")
                    }
                }
            }
        },
        itemRemove:(state, actions)=>{
            state.cart= state.cart.filter(key=>key.id!=actions.payload.id)
        },
        searchItem:(state,actions)=>{
                state.search = actions.payload;
        }
        
        
       
    }
})
export const {addToCart, qntyInc, qntyDec, itemRemove,searchItem} = cartSlice.actions;
export default cartSlice.reducer;