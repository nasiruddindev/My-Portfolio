import React from 'react'

const Input = ({text,className}) => {
  return (
    <input type="text" placeholder={text} className={`border-none outline-none bg-sky-200 px-3 py-1 rounded mb-3 placeholder:text-black/50 w-full placeholder:font-medium placeholder:font-inter placeholder:text-base${className}`}/>
  )
}

export default Input
