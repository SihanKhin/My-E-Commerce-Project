import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = ({open}) => {
      const isOpen = open ? 'translate-x-0' : '-translate-x-40';
  return (
     <nav className={`flex flex-col justify-start items-center fixed top-0 bottom-0 
      w-32 bg-gradient-to-r  from-stone-50 to-amber-400  left-0 transition-transform duration-300 pt-32 ${isOpen} md:hidden
     `}>
             
             <ul className='flex flex-col justify-center items-center list-none w-full
              
             '>
                <li className='flex justify-center items-center flex-row mb-5 hover:opacity-50 cursor-pointer'>
                  <svg className=' h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                      <Link className=' text-xl font-Roboto font-normal' to="/home">Home</Link>
                  </li>
               {/*  <li className='flex flex-row justify-center items-center'>
               
                  <span  className='  text-xl font-mono font-extralight'>Products</span>
                  </li>  */}
                <li className='flex flex-row justify-center items-center hover:opacity-50 cursor-pointer'> 
                      <svg className=' h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                <span className='text-xl font-Roboto font-normal'>
                  <Link to='/cart' className='mr-3'>Cart</Link>
                </span>
                </li>
                  <li className='flex flex-row justify-center items-center  mt-5 hover:opacity-50 cursor-pointer'>
               
                  <span  className='  text-xl font-mono font-extralight'>
                    <Link className=' text-xl font-Roboto font-normal' to='/men'>Men</Link>
                  </span>
                  </li> 
                  <li className='flex flex-row justify-center items-center  mt-5 hover:opacity-50 cursor-pointer'>
                      <span  className='  text-xl font-mono font-extralight'>
                        <Link className=' text-xl font-Roboto font-normal' to='/women'>Women</Link>
                      </span>
                      </li> 
                  <li className='flex flex-row justify-center items-center  mt-5 hover:opacity-50 cursor-pointer'>
                      <span  className='  text-xl font-mono font-extralight'>
                        <Link className=' text-xl font-Roboto font-normal' to='/electronic'>Electronic</Link>
                      </span>
                      </li> 
                  <li className='flex flex-row justify-center items-center  mt-5 hover:opacity-50 cursor-pointer'>
                      <span  className='  text-xl font-mono font-extralight'>
                        <Link className=' text-xl font-Roboto font-normal' to='/jewelery'>Jewelery</Link>
                      </span>
                      </li> 
                  <li className='flex flex-row justify-center items-center  mt-5 hover:opacity-50 cursor-pointer'>
                      <span  className='  text-xl font-mono font-extralight'>
                        <Link className=' text-xl font-Roboto font-normal' to='/about'>About</Link>
                      </span>
                      </li> 
             </ul>
        
     </nav>
  )
}

export default Sidebar