'use client'
import Encryption from '@/components/shared/hash/CheckBox'
import CheckBoxComp from '@/components/shared/hash/CheckBox'
import Laptop from '@/components/shared/hash/Laptop'
import Title from '@/components/shared/hash/Title'
import React from 'react'

const HashTextPage = () => {

  
  return (
    <div className='min-h-screen w-full text-white'>
      <div className='flex flex-col h-[50vh] lg:md:h-[60vh] w-full items-center'>
        <div className='flex flex-col w-[50vw] lg:w-[1000px] h-[60%] pt-20'>
          <Title/>
        </div>
      </div>
      <div className='h-50vh'>
      <Laptop/>
      </div>
  

        <div className='flex flex-col justify-center  w-[95vw] lg:w-[1000px] h-[100%] items-center pb-20'>
           

            <div className='flex flex-col justify-center text-[45px] pt-[25vh] leading-normal lg:md:leading-[20px]'>
              <h1>Для чего нужно шифрование данных?</h1>
            </div>
            <div className='flex flex-col md:lg:flex-row items-center mt-[10vh] gap-10 w-[80%]' >
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Конфиденциальность Ваших данных от сторонних лиц</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Информацию сможет «прочесть» только тот человек, у которого есть ключ.</p>
            </a>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Целостность информации.</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Вносить любые изменения может только владелец ключа.
</p>
            </a>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Идентификация отправителя информации.</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Человек, отправивший информацию, не сможет отрицать, что зашифрованные данные были отправлены именно им.</p>
            </a>
            </div>
        </div>
      <Encryption />
    </div>
  )
}

export default HashTextPage