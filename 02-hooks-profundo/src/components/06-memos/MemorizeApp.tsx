import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const MemorizeApp = () => {
    const {contador, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    
    return (
        <>
            <h1>Memorizar-Hook</h1>
            <h3>Contador:  <Small valor={contador} /> </h3>

            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
