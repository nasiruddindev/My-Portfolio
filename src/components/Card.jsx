import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import Image from '../components/Image'
const Card = ({title,text,src,className,imageClassName}) => {
  return (
    <div>
      <div className='group relative rounded-2xl overflow-hidden cursor-pointer max-w-92.5'>
            <div className='px-10 py-5 bg-white shadow-2xl    rounded-2xl'>
            <Image src={src} className={imageClassName}/>
            <h4 className='text-primary text-2xl font-semibold font-inter pt-5 pb-1'>{title}</h4>
            <h4 className='text-primary text-xl font-medium font-inter'>{text}</h4>
          </div>

          <div className='flex justify-center items-center bg-linear-to-r from-red-700 to-sky-700 absolute w-0 h-full top-0 left-0 group-hover:w-full duration-300 opacity-80'>
            <h4 className='text-white text-xl font-inter font-semibold'>Live Project </h4>
            <TiArrowRight className='text-3xl text-white ml-2'/>

          </div>

          </div>
    </div>
  )
}

export default Card
