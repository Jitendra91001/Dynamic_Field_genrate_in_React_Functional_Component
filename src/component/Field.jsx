import React from 'react'
import  Input  from './Input'
import { Radio } from './Radio'
import { Select } from './Select'
import { Text_area } from './Text_area'
import { CheckBox } from './CheckBox'
import Button  from './Button'

export const Field = ({controls,...data}) => {
    // console.log("Field data prop",data);
   switch(controls)
   {
    case "input":
        return <Input {...data}/>
    case "radio":
        return <Radio {...data}/>
    case "select":
        return <Select {...data}/>
    case "text_area":
        return <Text_area {...data}/>
    case "checkbox":
        return <CheckBox {...data}/>
    case "button":
        return <Button {...data}/>
    default:
        null
   }
  return (
    <>
    //
    </>
  )
}
