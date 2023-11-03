import React from 'react'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <div className='flex mt-20 flex-col items-center'>
      <h1 className='text-xl  font-semibold text-left text-gray-800  bg-white border-b border-gray-200'>Welcome to User Voting Statistics Section</h1>
      <div className='flex mt-12 justify-between items-center'>
      <button className='border-2 m-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/line' >LINE</Link></button>
      <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> <Link to='/bar' >BAR</Link></button>
    </div>
    </div>
  )
}

export default Stats
