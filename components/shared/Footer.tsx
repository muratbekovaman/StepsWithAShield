'use client'
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark-400 rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image width={40} height={200} src="/assets/icons/icon.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">STEPS WITH A SHIELD</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
               {navLinks.slice(1,5).map((link,index)=>{
                return( 
                     <li>
                <Link key={index} href={`${link.route}`} className="hover:underline me-4 md:me-6">{link.label}</Link>
                     </li>
               )})
            }
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Аман Муратбекович. Все права сохранены</span>
    </div>
</footer>
  )
}

export default Footer