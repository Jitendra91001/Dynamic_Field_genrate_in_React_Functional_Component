import React from "react";
import { Label } from "./Label";

const Input = (option) => {
  return (
    <>
      {
        option.label &&
        <Label label={option.label} />
      }
      <input type={option.type} onChange={option.handledata} className={option.class} placeholder={option.placeholder} name={option.name}/>
    </>
  )
}
export default Input;