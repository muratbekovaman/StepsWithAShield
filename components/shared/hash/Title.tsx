import React, { useState } from 'react'

function Title() {
    const [title, setTitle] = useState(
        "2dc15cfddf"
      )
        const value = 'Шифрования'
      const hoverHandler = () => {
        let times = 0
    const interval = setInterval(()=>{
      const newTitle = Array.from(title).map((letter, index) =>
      index < times ? value[index] : '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 36))
    
    );
    setTitle(newTitle.join(''));
    if(times > value.length) clearInterval(interval)
    times +=1
    },100)
        
      }
  return (
    <h1 className='lg:text-[150px] text-[30px] text-center'  onMouseEnter={hoverHandler}>{title}</h1>
    )
}

export default Title