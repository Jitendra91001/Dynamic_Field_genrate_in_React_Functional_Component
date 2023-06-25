import React from 'react'

export const Label = (props) => {
  return (
    <>
    <label htmlFor={props.label}>{props.label}</label>
    </>
  )
}
