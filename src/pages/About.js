import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
     <main className='flex flex-col justify-center items-center w-full min-h-screen
     bg-gradient-to-r  from-orange-200 to-amber-300
     '>
            <h1 className='text-xl md:text-4xl font-normal font-Roboto'>We sell only Women's Clothes And Men's Clothes.</h1>
        <Link to='/' className=' underline font-Roboto text-xl md:text-2xl mt-4
                   italic hover:text-stone-400
    '>Go Back To Our Home Page.</Link>
     </main>
  )
}

export default About