import React from 'react'
import images from '../../../constants/images'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
      <div className='mt-10 lg:w-1/2'>
      <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft lg:text-4xl xl:text-5xl  md:text-5xl lg:text-left lg:max-w-[540px] '>Looking into <span className='text-dark-spansoft italic font-cursive'>
    VOTING POLLS
</span>
, line chart and Bar chart  </h1>
<p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl  md:text-xl lg:text-left'> Welcome to <span>voting pools</span>, your easy to go page to give the statistics about the user wish and votes</p>
      </div>
      <div className='mt-10 rounded-md lg:block lg:1/2'>
        <img className='w-full  rounded-lg' src={images.Vote} alt="users are reading articles" />
     </div>
      </section>

  )
}

export default Hero
