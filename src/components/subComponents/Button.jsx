import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button style={{fontWeight: '500'}} className={className}>
        {children}
    </button>
  )
}

export default Button
