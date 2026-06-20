import React from 'react'

const Pera = ({text,className}) => {
  return (
    <p className={`text-lg text-secondary font-inter font-normal ${className}`}>{text}</p>
  )
}

export default Pera
