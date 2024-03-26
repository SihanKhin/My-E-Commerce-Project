import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
const Header = () => {
   const[open ,setOpen] = useState(false);    
    const handleOpenSideBar = ()=>{
         setOpen(!open);
    }
    const [isOpen,setIsOpen] = useState(false);
    const handleOpen = ()=>{
          setIsOpen(!isOpen)
    }
    const hidden = isOpen ? 'translate-y-0' : '-translate-y-80';
    const svg = isOpen ? 'rotate-180' : 'rotate-0'
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
              <Link to='/'><li className=' ml-10 hover:underline decoration-2 decoration-sky-500 mr-5'>
                  Home
                  </li></Link>
                 {/* <li className=' ml-5 hover:underline decoration-2  decoration-sky-500'>
                  <Link to="/men">Men</Link>
                 </li>
                 <li className=' ml-5 hover:underline decoration-2  decoration-sky-500'>
                  <Link to="/women">Women</Link>
                 </li> */}
                   <nav className='hidden relative md:flex flex-col justify-center items-center '>
                     <button
                   // ​​ onMouseEnter={handleOpen}
                      /* onMouseLeave={handleOpen} */
                        onClick={handleOpen}
                     className='flex flex-row justify-between items-center'>
                         <span className='ml-1 font-Roboto text-xl'>Products</span>
                          <svg className={  `h-3 transition-transform duration-300 ${svg}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>

                     </button>
                        <nav className={`flex justify-start items-center bg-white w-24 absolute rotate top-8 transition-transform duration-100 ${hidden}`}>
                              <ul className='w-full rounded'>
                              <Link to='/men/'><li className='hover:bg-slate-200  rounded-md text-base p-1'>Men</li></Link>
                              <Link to='/women'> <li className='hover:bg-slate-200 rounded-md text-base p-1'>Women</li></Link>
                              <Link to='/electronic'><li className='hover:bg-slate-200 rounded-md text-base p-1'>Electronic</li></Link>    
                              <Link to='/jewelery'><li className='hover:bg-slate-200 rounded-md text-base p-1'>Jewelery</li></Link>    
                             </ul> 
                        </nav>
                 </nav>  
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