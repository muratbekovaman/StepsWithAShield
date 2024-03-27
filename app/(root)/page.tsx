import DevDialogProm from '@/components/shared/main/DevDialogProm'
import DialogPop from '@/components/shared/main/Dialog'
import Facts from '@/components/shared/main/Facts'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='flex justify-center w-full h-[80vh]'>
      <div className='width-[40vw] h-[50%] mt-[10vh] flex flex-col lg:md:gap-14 gap-6 items-center'>
          <h4 className='gradient-text text-center text-white text-[26px] '>
          Информационная безопасность в один клик
          </h4>
          <h1 className='text-white text-center lg:text-[72px] md:text-[50px] text-[35px] leading-[50px]		'>
            STEPS WITH A SHIELD
          </h1>
          <h4 className=' text-center mt-[20px] items-end w-[70%] text-white text-[16px] bg-gradient-to-r from-primary to-white bg-clip-text text-transparent '>
          Присоединяйтесь к нашему сообществу уже сейчас и возьмите под контроль свою цифровую конфиденциальность!
          </h4>
      </div>
      <div className='lg:block absolute hidden left-[50vw] top-[65vh] '>
      <Link href="/password" className="flex items-center bg-white/10  max-w-sm p-3 gap-3 backdrop-blur-sm border border-gray-200 rounded-lg shadow hover:bg-white/30">
          <Image src="/assets/icons/lock.png" alt='' width={50} height={50}/>
          <p className="font-normal text-white">Надежные пароли </p>
        </Link>
      </div>
      <div className='lg:block absolute hidden right-[19vw] top-[32vh] '>
        <Link href="/hash" className="flex items-center bg-white/10  max-w-sm p-3 gap-3 backdrop-blur-sm border border-gray-200 rounded-lg shadow hover:bg-white/30">
          <Image src="/assets/icons/security.png" alt='' width={50} height={50}/>
          <p className="font-normal text-white"> Шифрования текста </p>
        </Link>
      </div>
      <div className='lg:block absolute hidden left-[20vw] top-[45vh] '>
        

      <DevDialogProm/>
      </div>
    </div>
    <Facts/>
    <section className="bg-dark-500 ">
    <div className="flex gap-14 items-start px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className=" font-light text-white sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Защита вашей цифровой жизни</h2>
            <p className="mb-4">В современном мире интернет стал неотъемлемой частью нашей повседневной жизни. Мы используем его для работы, общения, развлечений и многих других целей.</p>
            <p className='pb-[30px]'> Однако за удобством онлайн-активности скрываются серьезные <span className='text-primary'>риски для нашей конфиденциальности и безопасности персональных данных.</span> </p>
            <DialogPop/>
        </div>
        <div className="lg:md:block hidden">
            <Image width={1000} height={1000}  className="w-full rounded-lg" src="/assets/icons/main1.png" alt="office content 1"/>
        </div>
    </div>
</section>
    </>
  )
}

export default Home