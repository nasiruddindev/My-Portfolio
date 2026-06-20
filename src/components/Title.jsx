import React from 'react'

const Title = ({text,className}) => {
  return (
    <h2 className={`text-5xl text-primary font-semibold font-inter  ${className}`}>{text}</h2>
  )
}

export default Title
