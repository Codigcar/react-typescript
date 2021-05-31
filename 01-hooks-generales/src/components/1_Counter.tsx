import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementar = (numero: number = 1):void => {
        setCounter(counter + numero);
    }
    const reset = () => {
        setCounter(0);
    }

    return (
        <>
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br />
            <button onClick={ () => incrementar()} className="btn btn-outline-primary mt-2">+1</button>
            <button onClick={ () => incrementar(2)} className="btn btn-outline-warning mt-2">+2</button>
            <button onClick={ () => reset()} className="btn btn-outline-danger mt-2">Reset</button>
        </div>
        </>
    )
}
