import React from 'react'
import { Label } from './Label'

export const Text_area = (option) => {
  return (
    <>
    <Label label={option.label}/>
    <textarea name={option.name} onChange={option.handledata} className={option.class} placeholder={option.placeholder}></textarea>
    </>
  )
}
