import React from 'react'

const ListItem = ({text,onClick,className}) => {
  return (
    <li className={`relative pb-1 text-slate-900 font-inter font-medium text-base  cursor-pointer after:absolute after:top-full after:left-0 after:bg-black/70 after:w-0 after:h-0.5 hover:after:w-full after:duration-300 ${className}`} onClick={onClick}>
      {text}
    </li>
  )
}

export default ListItem
