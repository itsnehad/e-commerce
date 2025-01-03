import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus iste corporis amet ipsum neque id vitae ipsa sit aperiam.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1'>
                    <li>+1-748-928-2364</li>
                    <li>contact&trendvault.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@TrendVoult.com - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
