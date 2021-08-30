import { Fragment, useState } from 'react'
import { CitasLayout } from '../components/layout/CitasLayout';
import { FormLayout } from '../components/layout/FormLayout';
import './HomeView.scss';



export const HomeView = () => {

    const [cita, setCita] = useState<any>([]);

    const crearCita = (newCita:any) => {
        setCita([...cita, newCita])
    }
    // console.log('Citas: ', cita);

    // Funcion que elimina uan cita por su id
    const eliminarCita = (id:string) => {
        console.log('eliminarCita: ',id);
        
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
                        cita.map((cita:any,i:any) => (
                            <CitasLayout 
                                key={i} 
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
