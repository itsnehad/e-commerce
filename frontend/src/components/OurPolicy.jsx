import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row justify-around gap-12 sm:text-sm md-text-base text-grey-800 py-10'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>EASY EXCHANGE POLICY</p>
        <p className='text-grey-400'>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 DAYS RETURN POLICY</p>
        <p className='text-grey-400'>We offer 7 days return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>BEST CUSTMOMER SUPPORT</p>
        <p className='text-grey-400'>We provide 24/7 customer support</p>
      </div>
      
    </div>
  )
}

export default OurPolicy
