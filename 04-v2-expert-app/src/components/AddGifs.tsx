import React from 'react'

import { useState } from 'react';

export const AddGifs = (props:any) => {

    const [valueField, setValueField] = useState('');

    const handleChange = (e: any) => {
        setValueField(e.target.value)
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        props.setCategoriesName((categories:any) => [valueField, ...categories ] )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={valueField} onChange={handleChange} type="text" />
        </form>
    )
}
