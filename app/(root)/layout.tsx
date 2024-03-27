import Footer from '@/components/shared/Footer'
import MobileNav from '@/components/shared/MobileNav'
import  NavBar from '@/components/shared/NavBar'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='root'>
      <NavBar/>
      <MobileNav/>
        <div className='root-container '>
            <div className='wrapper'>
                {children}
            </div>
        </div> 
        <Footer/>
    </main>
   
  )
}

export default Layout