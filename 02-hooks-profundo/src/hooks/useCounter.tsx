import React, { useState } from 'react'

export const useCounter = (initialState = 10) => {
    const [contador, setContador] = useState(initialState);

    const reset = () => {
        setContador(initialState);
    }
    const increment = () => {
        setContador(contador + 1);
    }
    const decrement = () => {
        setContador(contador - 1);
    }

    return { contador, increment, decrement, reset }
}
