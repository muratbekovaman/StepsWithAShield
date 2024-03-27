import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Facts = () => {
  return (
    <section className="bg-dark-400 text-white rounded-2xl">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Факты о кибер безопасности</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Знали ли вы?</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3>Каждые <span className='text-primary'>39 секунд</span>  происходит успешная кибератака, затрагивающая отдельных пользователей, предприятия или организации.</h3>
            </div>
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3>Общий ущерб от кибер-преступлений в 2021 году оценивается примерно <span className='text-primary'> в 6 триллионов долларов.</span></h3>
            </div>
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3>Средняя стоимость одного случая потери данных для компании составляет  <span className='text-primary'>3,86 миллиона долларов.</span> </h3>
            </div>
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3>Вредоносная программа WannaCry 2017 года нанесла ущерб более чем  <span className='text-primary'>300 000 компьютерам в 150 странах.</span> </h3>
            </div>
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3><span className='text-primary'>95%</span>  всех кибератак являются результатом человеческой ошибки.</h3>
            </div>
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3>Лишь <span className='text-primary'>5% компаний</span>   защищены от самых разрушительных кибер-угроз.</h3>
            </div>
            <div className='bg-dark-600 p-3 rounded-xl transition duration-300 ease-in-out hover:shadow-lg'>
                <h3>К 2025 году глобальные расходы на кибербезопасность достигнут <span className='text-primary'>1,75 триллиона долларов </span> ежегодно.</h3>
            </div>
            <div className='  p-3 rounded-xl text-[4.1rem] break-words	leading-[100%] transition ease-in-out delay-150 bg-primary/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                <Link href='https://www.youtube.com/watch?v=mUCjRGkks58' className=' '>БОЛЬШЕ</Link>
            </div>
              
    </div>
  </div>
</section>
  )
}

export default Facts