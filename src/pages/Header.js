import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
const Header = () => {
   const[open ,setOpen] = useState(false);    
    const handleOpenSideBar = ()=>{
         setOpen(!open);
    }
  return (
    <>
    <header className=' h-20 sticky mt-0 w-full fixed top-0 z-50
    bg-gradient-to-r from-stone-50 to-amber-300
    flex flex-row justify-between items-center'>
         <section className='flex flex-1 ml-5'>
            <nav className='w-32 md:w-40 ml-10  md:ml-20'>
                <h1 className='text-3xl font-myfont font-medium text-black'>Men &
              <span className='text-xl ml-6 font-myfont font-medium text-black'>Women</span>
              </h1>
            </nav>
           
         </section>
         <section className='w-24'>
             <a href="#" className='md:hidden text-2xl hover:opacity-65 cursor-pointer' onClick={handleOpenSideBar}>&#9776;</a>
         </section>
         <section className='md:flex hidden flex-row justify-center items-center w-3/5'>
              <ul className='flex list-none cursor-pointer text-xl '>
                <li className=' ml-10 hover:underline decoration-2 decoration-sky-500'>
                  <Link to='/'>Home</Link>
                  </li>
                 <li className=' ml-5 hover:underline decoration-2  decoration-sky-500'>
                  <Link to="/men">Men</Link>
                 </li>
                 <li className=' ml-5 hover:underline decoration-2  decoration-sky-500'>
                  <Link to="/women">Women</Link>
                 </li>
                <li className=' ml-5 hover:underline decoration-2  decoration-sky-500'>
                  <Link to='/cart'>Cart</Link>
                </li>
                <li className=' ml-5 hover:underline decoration-2  decoration-sky-500'>
                  <Link to="/about">About</Link>
                </li>
              </ul>
         </section>
    </header>
      <Sidebar open={open}/>
    </>
  )
}

export default Header