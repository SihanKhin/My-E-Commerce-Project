import React, { useEffect } from 'react'
import { getProductById  } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'
import { useParams } from 'react-router-dom'
import { addToCart } from '../features/products/productSlice'
const ProductDetails = () => {
    const {proId} = useParams();
    const dispatch = useDispatch();
     useEffect(()=>{
        dispatch(fetchProducts());
     },[dispatch]);
     const product = useSelector(state=>getProductById(state,parseInt(proId)));
     if(!product){
        return <p>Loading......</p>
     }
    const addtocart = (product)=>{
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: product.quantity
        }))
    }
  return (
    <main className='flex flex-grow justify-start items-center w-full flex-col
     bg-gray-300'>
             <div className='flex flex-col w-11/12 md:w-11/12 md:mt-10  mt-2 pb-2 md:pb-10 md:flex-row rounded-sm justify-center items-center bg-slate-50'>
                  <div className='w-60  h-60 md:ml-4 md:h-1/2 md:w-1/2 md:mt-2'>
                      <img src={product.image} className=' object-cover' alt="image" />
                  </div>
                      <div className='flex flex-col justify-center items-center w-11/12 mt-6 ml-3 '>
                            <div  className='flex flex-col justify-center mt-2 mb-2 items-center w-11/12 md:mb-20 pt-20'>                               
                            <span className='text-3xl md:text-6xl font-Roboto font-medium'>
                            {product.title}
                            </span>
                            </div > 
                             <div className='flex justify-center items-center w-11/12 '>
                                  <span className=' text-sm font-Roboto italic font-normal md:text-xl'>{product.description}</span>
                             </div>
                              <div className='flex flex-col justify-center items-center w-96 mt-2'>
                                  <span className='text-xl font-Roboto font-medium mb-2'>Rate: {product.rating.rate}</span>
                                  <span className='text-xl font-Roboto font-medium'>Count: {product.rating.count}</span>
                              </div>
                                <div className='flex mb-2 justify-center items-center w-96 mt-2 text-xl font-Roboto
                                 font-medium
                                '>
                                    Price: ${product.price}
                                </div>
                                <div className='flex flex-col justify-center items-center w-full mt-4'>
                                    <button onClick={()=>addtocart(product)} className=' rounded-sm hover:opacity-80 w-1/2 h-10 bg-black text-white text-base
                                     font-Roboto font-medium
                                    '>Buy</button>
                                </div>
                      </div>
             </div>
    </main>
  )
}

export default ProductDetails