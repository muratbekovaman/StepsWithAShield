'use client'

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link  from 'next/link'
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'


function MobileNav() {
    const pathName = usePathname()
  return (
    <header className='header'>
        <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Image className='width-100' alt='#' src='/assets/icons/icon.png' width={60} height={25} />

        </Link>
        <nav className='flex gap-10'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>

                <Sheet>
  <SheetTrigger>
    <Image alt='' src='/assets/icons/menu.png' width={20} height={20}></Image>
  </SheetTrigger>
  <SheetContent className='sheet-content sm:wd-64'>
  <ul className='header-nav_elements'>
        {navLinks.map((link)=>{
          const Active = link.route === pathName
          return(
            <li key={link.route} className={` ${Active ? "text-primary/60" : "text-dark-400"} `}>
             <Link href={link.route} className='navbar-link'>
              {link.label}
             </Link>
            </li>
          )
        })}
    </ul>
  </SheetContent>
</Sheet>
            </SignedIn>
            <SignedOut>
          <Button>
            <Link href='/sign-in'>Login</Link>
          </Button>
      </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav