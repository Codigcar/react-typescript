import  { useMemo, useState } from 'react'
import { procesoPesado } from '../../helper/Iteracion-memo';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
    const {contador, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(contador), [contador]);

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Contador:  {contador}</h3>
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
