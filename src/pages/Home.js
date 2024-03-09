
import React from 'react'
import img1 from '../image/pngtree-happy-shoping-png-image_6087395.png'
import Products from '../features/products/Products'
const Home = () => {
  return (
    <>
    <main className='flex  min-h-screen w-full justify-start items-center flex-col bg-gradient-to-r  from-stone-50 to-amber-400 h-96'>
       <nav className='flex flex-col-reverse md:flex-row w-full justify-between items-center
        '>
         <section className='flex flex-col w-full justify-center items-center mt-10'>
           <h1 className='text-4xl font-medium font-Roboto italic text-gray-900 md:text-8xl'>
                Hey! 
           </h1>
           <span className='text-xl w-80  font-medium font-Roboto md:w-11/12 md:text-4xl  mt-8 ml-8'>
            Welcome to Our Page and Pleasure to have you here...
            </span>
           <span className='text-base italic font-medium font-Roboto md:text-3xl w-80 text-center md:text-nowrap mt-8'>
              We're Ready to serve our customers.
            </span>
         </section>
          <section className='w-80  md:w-1/2 md:h-1/2'>
                 <a href="#products"><img  className=' object-cover md:h-96' src={img1} alt="" /></a>
          </section>
         </nav>
                
    </main>
    <nav id='products' className='flex w-full   justify-center items-center 
           py-4
         bg-gradient-to-r from-yellow-50 to-amber-500'>
          <h2 
             className='text-4xl font-Roboto font-light'
             >All Products</h2></nav>
    <Products />
    </>
  )
}

export default Home