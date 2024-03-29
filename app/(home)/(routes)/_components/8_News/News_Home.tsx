import React from 'react'
import News_Card from './News_Card'


function News_Home() {
  return (
    <div className=' w-full flex flex-col items-center md:gap-3 md:h-[30vw] h-[40vw] px-[5%] md:py-6 py-1  bg-red-50'>
        <div className='text-center w-full'>
           <p className='text-sm md:text-4xl md:mb-4 text-red-900 font-bold'>Tin Tức Du Học</p>
         </div>
        <div className='md:gap-8 gap-4 h-full flex items-center overflow-x-auto snap-x snap-mandatory pb-[2%]  '>
            <News_Card/>
            <News_Card/>
            <News_Card/>
            <News_Card/>
            <News_Card/>
        </div>
    </div>
  )
}

export default News_Home