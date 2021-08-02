// import { useState } from 'react';

// export const useForm = ( initialState = {} ) => {
    
//     const [values, setValues] = useState(initialState);

//     const reset = () => {
//         setValues( initialState );
//     }


//     const handleInputChange = ({ target }:any) => {

//         setValues({
//             ...values,
//             [ target.name ]: target.value
//         });

//     }

//     return [ values, handleInputChange, reset ];

// }

import React, { ChangeEvent, useState } from 'react'

// export function useForm<T>( initialState:T ){
export const useForm = <T extends Object >(initialState: T) => {
    const [formulario, setFormulario] = useState(initialState);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFormulario({
            ...formulario,
            [ev.target.name]: ev.target.value
        });
    }
    return {formulario, handleChange}
}