import React from 'react'

const Button = ({text}) => {
  return (
    <button
      className="px-7 py-3
    rounded-xl
    font-medium
    text-white
    bg-linear-to-r
    from-blue-600
    to-indigo-600
    hover:from-blue-700
    hover:to-indigo-700
    hover:shadow-lg
    hover:shadow-blue-500/20
    transition-all
    duration-300
    cursor-pointer"
    >
      {text}
    </button>
  )
}

export default Button
