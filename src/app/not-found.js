import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='bg-violet-500 h-[900px] text-6xl font-extrabold text-white-600 text-center my-12'>
       <h1>This page not found.</h1> 
       <Link href={'/'}>Go Back to Home</Link>
    </div>
  )
}

export default NotFound