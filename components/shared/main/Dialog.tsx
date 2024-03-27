'use client'
import React from 'react'
import Grid from '@/components/shared/main/Grid'

import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../../ui/button'
import Link from 'next/link'
const DialogPop = () => {
  return (
    <Dialog >
  <DialogTrigger>
    <Button>10 STEPS к защите</Button>
    

  </DialogTrigger>
  <DialogContent className='flex flex-col justify-center lg:md:overflow-y-hidden overflow-y-scroll lg:max-w-screen-lg max-h-screen bg-white/10 text-white backdrop-blur-sm'>
    <div><Grid/></div>
    <Link href='/steps' className='self-center gradient-text'>Остальные 7</Link>
  </DialogContent>
</Dialog>
  )
}

export default DialogPop