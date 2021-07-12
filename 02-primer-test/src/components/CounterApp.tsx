import React, { useState } from 'react'

export const CounterApp = () => {
    const [contador, setContador] = useState(0)

    const handleSuma = () => {
        setContador(contador + 1);
    }

    const handleResta = () => {
        setContador(contador - 1);
    }

    return (
        <>
            <div className="container">
                <h2>Contador: {contador}</h2>
                <button onClick={handleSuma} className="btn btn-primary">+1</button>
                <button onClick={handleResta} className="btn btn-danger">-1</button>
            </div>
        </>
    )
}
