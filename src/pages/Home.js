
import React from 'react'
import img1 from '../image/pngtree-happy-shoping-png-image_6087395.png'
import Products from '../features/products/Products'
const Home = () => {
  return (
    <main className='flex min-h-screen w-full justify-start items-center flex-col'>
       <nav className='flex w-full justify-between items-center
        bg-gradient-to-r  from-stone-50 to-amber-400 h-96'>
         <section className='flex flex-col w-full justify-center items-center'>
           <h1 className='text-4xl font-medium font-Roboto italic text-gray-900 md:text-6xl'>
                Hey! 
           </h1>
           <span className='text-xl font-medium font-Roboto md:text-3xl  mt-8 ml-8'>
            Welcome to Our Page and Pleasure to have you here.
            </span>
           <span className='text-base font-medium font-Roboto md:text-xl w-40 md:text-nowrap mt-4 ml-8'>
              We're Ready to serve our customers.
            </span>
         </section>
          <section className='w-80  md:w-96 md:h-80'>
                 <img className=' object-cover md:h-80' src={img1} alt="" />
          </section>
         </nav>
         <nav className='flex w-full  justify-center items-center 
           py-4
         bg-gradient-to-r from-yellow-50 to-amber-500'>
          <h2 
             className='text-4xl font-Roboto font-light'
             >All Products</h2></nav>
          <Products />
    </main>
  )
}

export default Home