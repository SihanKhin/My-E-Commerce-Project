import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    cart: []
}
const PRO_URL = 'https://fakestoreapi.com/products';
export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
      try{
            const respone = await axios.get(PRO_URL);
            return respone.data
      }catch(err){
        throw new Error('cant fetch the Products');
      }
})
export const addToCart = createAsyncThunk('products/addToCart',async(productId,{getState})=>{
    try{
         // define that state to use in order to find the existing product in the cart.
         const state = getState();
         const existingProduct = state.products.cart.find(pro=>pro.id ===productId)
          //if it exists return the productId and the quantity of 1.
         if(existingProduct){
            return {id:productId, quantity:1}
         }else {
             //if not return the entire Product.
            return productId;
            /* return state.products.cart.unshift({...id,quantity:1}) */
         }
    }catch(err){
        throw new Error("Cant add to Cart.")
    }
})
export const deleteAllProduct = createAsyncThunk('products/deleteAllProduct',async(proId)=>{
    try{
      return proId;
    }catch(err){
      return err.message;
    }
})

export const deleteAddToCart = createAsyncThunk('products/deleteAddToCart',async(productId/* productId,{getState} */)=>{
              // I cant do both way.
            try{
                   // return only the productId
                 return productId
                /* const state = getState();
                 const existingProduct = state.products.cart.find(pro=>pro.id ===productId)
                  if(existingProduct){
                     return {id:productId,quantity:existingProduct.quantity-1};
                  }
                  else {
                    return productId;
                  } */
            }catch(err){
                  throw new Error("Cant delete the Products");
            }
})

const  productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = [...action.payload]
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
             const {id/* , quantity */}= action.payload;
            //  state.cart = state.cart.find(pro=>pro.id ===id)
              const existingProduct = state.cart.findIndex(pro=>pro.id ===id)
              if(existingProduct !==-1){
                state.cart[existingProduct].quantity++;
              }else {
                state.cart.unshift({...state.products.find(pro=>pro.id === id),quantity:1});
              }

        })
        .addCase(deleteAddToCart.fulfilled,(state,action)=>{
          // define the id as action.payload;
              const id = action.payload;          
              // find the existing product in the cart by its id.
              const existionProduct = state.cart.findIndex(pro=>pro.id === id)
              // if it exists if the existingProduct not equal to -1 
              if(existionProduct !== -1){
                // define the existingpro to equal to the entirely state.cart[existingProduct]
               const existingpro = state.cart[existionProduct] 
                 // id existingpro.quantity > 1 existingpro.quantity --
                   if(existingpro.quantity >1){
                            existingpro.quantity--;
                  }else { 
                     // if not we splice the existingProdct by 1
                    state.cart.splice(existionProduct,1);
                  }
                 /*   existionProduct.quantity++;
                  state.cart = state.cart.filter(pro=>pro.id !== id) */; 
              }
        })
        .addCase(deleteAllProduct.fulfilled,(state,action)=>{
            state.cart = state.cart.filter(pro=>pro.id !== action.payload)
        })
      
    }
})
export const getAllProducts = (state)=>state.products.products;
export const allMenProduct = (state) =>
state.products.products.filter(pro=>pro.category === "men's clothing");
export const allWomenProduct = (state) =>
state.products.products.filter(pro=>pro.category === "women's clothing");
export const getCart = (state)=>state.products.cart;
export const getProductById = (state,id)=>state.products.products.find(pro=>pro.id === id)
export default productSlice.reducer