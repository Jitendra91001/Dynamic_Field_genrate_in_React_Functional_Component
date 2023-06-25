import React from 'react'
import { Label } from './Label';

export const Radio = (option) => {
    return (
        <>
            {
                option.value.map((item, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" onChange={option.handledata} value={item.value} name="gender"/><Label label={item.label}/>
                        </div>
                    );
                })
            }
        </>
    )
}
