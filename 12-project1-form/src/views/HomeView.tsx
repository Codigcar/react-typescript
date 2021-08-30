import { Fragment } from 'react'
import './HomeView.scss';
import { useForm } from '../components/hooks/useForm'
import { InputC } from '../components/comon/Input';
import { Button } from '@material-ui/core';
import { TextAreaC } from '../components/comon/TextArea';
import { ButtonC } from '../components/comon/Button';

type FormInterface = {
    mascota: string;
    propietario: string;
    fecha: string;
    hora: string;
    sintomas: string;
}

export const HomeView = () => {

    const { formulario, handleChange } = useForm<FormInterface>({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const { mascota, propietario, fecha, hora, sintomas } = formulario;



    const submit = (e: any) => {
        e.preventDefault();
        console.log('submit');

    }

    return (
        <Fragment>
            <h1 className="title">Administrador de Pacientes</h1>
            <div className="row">
                <div className="column1">
                    <form onSubmit={submit}>
                        <InputC
                            label="Nombres Mascota"
                            name="mascota"
                            value={mascota}
                            onChange={handleChange}
                        />
                        <InputC
                            label="Nombres Dueño"
                            name="propietario"
                            value={propietario}
                            onChange={handleChange}
                        />
                        <InputC
                            name="fecha"
                            value={fecha}
                            onChange={handleChange}
                            type="date"
                        />
                        <InputC
                            name="hora"
                            value={hora}
                            onChange={handleChange}
                            type="time"
                        />
                        <TextAreaC
                            name="sintomas"
                            value={sintomas}
                            onChange={handleChange}
                        />

                        <ButtonC title="Agregar Cita" />

                    </form>
                </div>
                <div className="column2">
                    2
                </div>
            </div>
        </Fragment>
    )
}
