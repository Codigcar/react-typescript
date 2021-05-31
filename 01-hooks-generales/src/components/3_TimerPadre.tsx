import React, { useState } from 'react'
import { Timer } from './4_Timer'

export const TimerPadre = () => {
    const [milisegundos, setMilisegundos] = useState(1000)

    return (
        <>
            <span>Milisegundos {1000}</span>
            <br />
            <button onClick={() => setMilisegundos(1000)} className="btn btn-outline-success">1000</button>
            <button onClick={() => setMilisegundos(100)} className="btn btn-outline-success">2000</button>
            <Timer milisegundos={milisegundos} />
        </>
    )
}
