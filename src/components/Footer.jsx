import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='flex justify-around bg-[#F9F6F3] text-[#1C352D] p-5 shadow-2xl  w-full'>
        <div className='font-extrabold text-5xl text-red-700'>
            Harshit jain
            <div className='mt-5 ml-25 text-sm font-normal text-[#1C352D]'>© 2025 All Rights Reserved</div>
        </div>

        <div className='flex gap-30  font-semibold text-[#1C352D]'>
            <div className='flex flex-col gap-4'> 
                <h1 className='text-xl'>RESOURCES</h1>
                <NavLink
                to="/"
                className={({isActive}) =>`text-[#A6B28B] underline ${isActive ? "text-orange-700 " : ""}`}
                >Home</NavLink>
                <NavLink
                to='/contact'
                className={({isActive}) =>`text-[#A6B28B] underline ${isActive ? "text-orange-700 " : ""}`}
                >Contact</NavLink>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl'>FOLLOW US</h1>
                <Link
                to='#'
                className='text-[#A6B28B] underline'
                >Discord</Link>
                <Link
                 to='#'
                className='text-[#A6B28B] underline'
                >Github</Link>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl'>LEGAL</h1>
                <Link
                 to='#'
                className='text-[#A6B28B] underline'
                >Privacy Policy</Link>
                <Link
                 to='#'
                className='text-[#A6B28B] underline'
                >Terms & Conditions</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer