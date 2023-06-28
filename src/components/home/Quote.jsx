import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'

const Quote = () => {
  return (
    <div className='flex mx-64 gap-10 text-[1.05rem] tracking-wide my-28'>
        <FaQuoteLeft className='text-[3rem]'/>
        <div className='text-gray-800'>
        <p className='mb-5'>This theme is a Swiss Army knife of Bootstrap themes. Built with components in mind, it can be easily adjusted to create layouts of any complexity within a few minutes.</p>
        <p className=''>Yuri Gamin, Moscow</p>
        </div>
    </div>
  )
}

export default Quote