import React from 'react'

const Button = ({ children, clsName }) => {
  return (
    <button style={{fontWeight: '500'}} className={clsName}>
        {children}
    </button>
  )
}

export default Button
