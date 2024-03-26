'use client'

import Link  from 'next/link'
import Image  from 'next/image'

import { UserButton } from '@clerk/nextjs'


import React from 'react'
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

const NavBar = () => {
  const pathName = usePathname()
  return (
    <div className='navbar'>
        <div className='flex size-full flex-row items-center justify-between gap-10'>
    <Link href='/' className='navbar-logo'>
        <Image className='width-100' alt='#' src='/assets/icons/logo.png' width={100} height={28} />
    </Link>
    <nav className='navbar-nav'>
      <SignedIn>
    <ul className='navbar-nav_elements'>
        {navLinks.map((link)=>{
          const Active = link.route === pathName
          return(
            <li key={link.route} className={`navbar-nav_element group ${Active ? "text-primary/60" : "text-white"} `}>
             <Link href={link.route} className='navbar-link'>
              {link.label}
             </Link>
            </li>
          )
        })}
    </ul>

    {  <div className='pl-20'>
      <UserButton afterSignOutUrl='/' />
    </div>
   }
      </SignedIn>


      <SignedOut>
          <Button>
            <Link href='/sign-in'>Login</Link>
          </Button>
      </SignedOut>
    </nav>
        </div>
        </div>
  )
}

export default NavBar