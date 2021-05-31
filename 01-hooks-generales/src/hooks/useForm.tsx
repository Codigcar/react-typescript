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
