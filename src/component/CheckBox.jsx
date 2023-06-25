import React from 'react'
import { Label } from './Label';

export const CheckBox = (option) => {
  return (
<>
{
    option.value.map((item,index)=>{
        return(
            <span key={index}>
                    <input type="checkbox" onClick={option.handleChecVal} value={item.value}/> <Label label={item.value}/>
            </span>
        );
    })
}
</>
  )
}
