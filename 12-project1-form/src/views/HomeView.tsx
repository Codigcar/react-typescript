import { Fragment, useState } from 'react'
import { CitasLayout } from '../components/layout/CitasLayout';
import { FormLayout } from '../components/layout/FormLayout';
import './HomeView.scss';



export const HomeView = () => {

    const [citas, setCita] = useState<any>([]);

    const crearCita = (newCita:any) => {
        setCita([...citas, newCita])
    }
    // console.log('Citas: ', cita);

    // Funcion que elimina uan cita por su id
    const eliminarCita = (id:string) => {
        console.log('eliminarCita: ',id);
        const citasFiltrada = citas.filter((cita:any) => cita.id !== id);
        setCita(citasFiltrada);
    }

    
    return (
        <Fragment>
            <h1 className="title">Administrador de Pacientes</h1>
            <div className="row">
                <div className="column1">
                    <h1>Crea tu Cita</h1>
                    <FormLayout 
                        crearCita={crearCita} 
                    />
                </div>
                <div className="column2">
                    <h1>Visualia tus Citas registradas</h1>
                    {
                        citas.map((cita:any) => (
                            <CitasLayout 
                                key={cita.id} 
                                cita={cita} 
                                eliminarCita={eliminarCita}
                            />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}
