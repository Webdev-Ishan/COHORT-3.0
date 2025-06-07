import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div className='bg-gradient-to-r from-stone-100 to-stone-200 w-full h-full' >
      
      <Navbar />
      <div className='w-full h-screen flex justify-center items-center'>


<div className='w-full flex flex-col items-center justify-center gap-4'>


  <span className='text-6xl font-serif font-bold '>BUILDING THE FUTURE</span>
   <span className='text-6xl font-serif font-bold '> OF </span> 
   <span className='text-6xl font-serif font-bold '>EVERY CHILD DAY BY DAY</span>


<button className='w-auto h-auto p-2 font-bold bg-yellow-400 text-black hover:bg-blue-600 duration-300 rounded-lg border  border-black'>BOOK A SESSION </button>

</div>

 
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage
