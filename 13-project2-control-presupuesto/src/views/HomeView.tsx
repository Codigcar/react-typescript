import React, { Fragment, useState } from 'react'
import './HomeView.scss'
import { FormLayout } from '../components/layout/FormLayout';



export const HomeView = () => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    
    console.log('presupuesto: ', presupuesto);
    console.log('restante: ', restante);
    
    return (
        <Fragment>
            <h1>Gasto Semanal</h1>
            <div className="form-layout">
                <FormLayout 
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                />
            </div>
        </Fragment>
    )
}
