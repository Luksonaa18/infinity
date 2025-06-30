"use client"
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
     <footer>
        <div className="bg-gray-800 flex flex-col gap-5 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <p className="text-xs mt-2">Follow us on social media</p>
                <div className="flex flex-row gap-4 text-2xl mt-2">
                <FaFacebook 
                className='cursor-pointer hover:text-blue-500 transition-colors duration-200'
                />
                <FaInstagram className='cursor-pointer hover:text-blue-500 transition-colors duration-200'/>
                <FaTiktok className='cursor-pointer hover:text-blue-500 transition-colors duration-200'/>
                </div>
               </div>
            </div>
        </div>
     </footer>
    </>
  )
}

export default Footer