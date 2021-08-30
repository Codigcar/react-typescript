import React, { Fragment } from 'react'
import './HomeView.scss';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm } from '../components/hooks/useForm'

export const HomeView = () => {

    const { formulario, handleChange } = useForm<any>({
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
                        <TextField
                            id="outlined-basic"
                            label="Nombres Mascota"
                            variant="outlined"
                            className="text-field"
                            autoComplete="off"
                            style={{ marginBottom: 20 }}
                            name="mascota"
                            value={mascota}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Nombres Dueño"
                            variant="outlined"
                            className="text-field"
                            autoComplete="off"
                            style={{ marginBottom: 20 }}
                            name="propietario"
                            value={propietario}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            type="date"
                            variant="outlined"
                            className="text-field"
                            autoComplete="off"
                            style={{ marginBottom: 20 }}
                            name="fecha"
                            value={fecha}
                            onChange={handleChange}

                        />
                        <TextField
                            id="outlined-basic"
                            type="time"
                            variant="outlined"
                            className="text-field"
                            autoComplete="off"
                            style={{ marginBottom: 20 }}
                            name="hora"
                            value={hora}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ width: "100%" }}
                        >
                            Agregar Ctia
                        </Button>
                    </form>
                </div>
                <div className="column2">
                    2
                </div>
            </div>
        </Fragment>
    )
}
