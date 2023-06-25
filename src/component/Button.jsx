import React from 'react'

 const Button = (option) => {
  return (
    <button type={option.type} className={option.class}>{option.value}</button> 
  )
}

export default Button;
