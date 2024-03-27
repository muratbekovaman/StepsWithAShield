import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
type GridCardProps = {
    image: string;
    label: string;
    text: string
  };
function GridCard({image, label, text}: GridCardProps) {
  return (
    <div className="flex flex-col justify-between pb-7 px-7 max-w-sm h-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex justify-center'> 
        <Image  width={300} height={700}  className="rounded-t-lg" src={image} alt="" />
    </div>
  
        <div className='p-2'>
            <h5 className="mb-auto text-xl font-bold tracking-tight text-gray-900 dark:text-white">{label}</h5>
        </div>
        <div>
             <Button>
              <Link href="/tips">
              Читать

              </Link>
              </Button>

        </div>

</div>
  )
}

export default GridCard