import React, { useState } from 'react'
import { getAllProducts } from './productSlice';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import { addToCart } from './productSlice';
import { Link } from 'react-router-dom';
const Products = () => {
  //const display = useRef();
    const [message,setMessage] = useState(null)
    const dispatch = useDispatch();
    const product = useSelector(getAllProducts);
    const filterdProduct = product.filter(pros=>pros.category ==="men's clothing" || pros.category==="women's clothing" 
     || pros.category==="electronics" || pros.category ==="jewelery");

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])
    if(!product){
        return <p>no products</p>
    }

   /*  const innerDisplay =()=>{
        display.current.textContent = 'added to cart';
    } */
    const addtocart = ({id,title,image,price,quantity})=>{
         dispatch(addToCart( {id:id,title:title,image:image,price:price,quantity:quantity}));  
    }
  return (

      <main className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
    xl:grid-cols-5 w-full place-content-start overflow-hidden 
    bg-gradient-to-r from-yellow-50 to-amber-500 '>
            
         { 
            filterdProduct.map(pro=>(
                <div key={pro.id} className='
                flex flex-col justify-start items-center  
                 mt-4 
                '>  
                   <div className='flex flex-col justify-center items-center w-64 
                   bg-gradient-to-r from-orange-200 to-amber-50 rounded-sm pb-4
                   '>
                    <div className='w-full h-64 border-2 border-slate-200'>
                         <img  className=' object-cover w-full h-64'  src={pro.image} alt="image" />
                    </div>
                     <div className='w-full flex flex-col justify-center items-center p-4 
                         h-40
                     '>  
                       <div className='flex justify-center items-center mt-3'>
                         <span className='text-xl font-medium overflow-hidden max-h-8 '>{pro.title}</span>
                       </div>
                       <div className='flex justify-center items-center'>
                         <span className='text-sm overflow-hidden max-h-10 mt-3'>{pro.description}</span>
                       </div>
                        <div className='flex flex-col justify-center items-center w-full mt-4 mb-4'>
                        <Link to={`/products/${pro.id}`} className=' hover:underline text-sm font-Roboto font-normal'>
                          View Details
                          </Link>
                          </div>
                       <div className='flex justify-end items-center'>
                          <span className='text-xl font-medium '>${pro.price}</span>
                       </div>   
                     </div>   
                        <div className='flex justify-center items-center mx-auto w-full h-16'>
                        <button onClick={()=>addtocart(pro)} className=' w-52 rounded-sm bg-black text-white 
                           h-10 hover:opacity-50 cursor-pointer mt-auto
                         '>Add To Cart</button>
                        </div>
                </div>
                </div>
            ))
         }
    </main>
  )
}

export default Products