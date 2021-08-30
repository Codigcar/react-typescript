import { Fragment, useEffect, useState } from 'react'
import { CitasLayout } from '../components/layout/CitasLayout';
import { FormLayout } from '../components/layout/FormLayout';
import './HomeView.scss';



export const HomeView = () => {

    // Leyendo LocalStorage
    let citasLocalStorage:any = JSON.parse(localStorage.getItem('citas') || '[]') ;
    // console.log('citasLocalStorage: ',citasLocalStorage);
    
    if(citasLocalStorage === ''){
        citasLocalStorage = [];
    }

    // Inicializar Arreglo de citas
    const [citas, setCita] = useState<any>(citasLocalStorage);

    // useEffect para realizar ciertas operaciones cuando el State cambia
    useEffect(() => {
        if(citasLocalStorage){
            localStorage.setItem('citas', JSON.stringify(citas));
        } else {
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas, citasLocalStorage])

    const crearCita = (newCita:any) => {
        setCita([...citas, newCita])
    }

    // Funcion que elimina uan cita por su id
    const eliminarCita = (id:string) => {
        console.log('eliminarCita: ',id);
        const citasFiltrada = citas.filter((cita:any) => cita.id !== id);
        setCita(citasFiltrada);
    }

    // Mensaje adicional
    const titulo = citas.length === 0 ? 'No hay citas registradas': 'Visualia todas tus citas';

    
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
                    <h1>{titulo}</h1>
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
