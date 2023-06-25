import React from 'react'

function Form({children,onSubmitData,style}) {
  return (
    <>
    <form onSubmit={onSubmitData} style={style}>
    {children}
    </form>
    </>
  )
}

export default Form