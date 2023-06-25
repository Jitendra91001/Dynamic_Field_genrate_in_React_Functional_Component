import React from 'react'

export const Select = (option) => {
    return (
        <>
            <select className={option.class} onChange={option.handledata} name={option.name}>
                {
                    option.value.map((item, index) => {
                        return (
                                <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </>
    )
}
