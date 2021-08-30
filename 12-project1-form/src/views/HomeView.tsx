import { Fragment, useState } from 'react'
import { FormLayout } from '../components/layout/FormLayout';
import './HomeView.scss';



export const HomeView = () => {

    const [cita, setCita] = useState<any>([]);

    const crearCita = (newCita:any) => {
        setCita([...cita, newCita])
    }
    console.log('Citas: ', cita);

    
    return (
        <Fragment>
            <h1 className="title">Administrador de Pacientes</h1>
            <div className="row">
                <div className="column1">
                    <FormLayout crearCita={crearCita} />
                </div>
                <div className="column2">
                    2
                </div>
            </div>
        </Fragment>
    )
}
