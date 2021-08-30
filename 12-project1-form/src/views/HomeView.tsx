import { Fragment } from 'react'
import './HomeView.scss';
import { useForm } from '../components/hooks/useForm'
import { InputC } from '../components/comon/Input';
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

    // Form
    const { formulario, handleChange, errors, setErrors } = useForm<FormInterface>({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const { mascota, propietario, fecha, hora, sintomas } = formulario;

    // Validar errores
    const validate = (fieldValues = formulario) => {
        let temp = { ...errors }
        if ('mascota' in fieldValues)
            temp.mascota = fieldValues.mascota.trim() ? "" : "This field is required"
        if ('propietario' in fieldValues)
            temp.propietario = fieldValues.propietario.trim() ? "" : "This field is required"
        if ('fecha' in fieldValues)
            temp.fecha = fieldValues.fecha.trim() ? "" : "This field is required"
        if ('hora' in fieldValues)
            temp.hora = fieldValues.hora.trim() ? "" : "This field is required"
        if ('sintomas' in fieldValues)
            temp.sintomas = fieldValues.sintomas.trim() ? "" : "This field is required"

        setErrors({
            ...temp
        })

        if (fieldValues === formulario)
            return Object.values(temp).every(x => x === "")
    }

    // Submit
    const submit = (e: any) => {
        e.preventDefault();
        console.log('submit');
        if (validate()) {
            console.log('vacio');
        }
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
                            error={errors.mascota}
                            />
                        <InputC
                            label="Nombres Dueño"
                            name="propietario"
                            value={propietario}
                            onChange={handleChange}
                            error={errors.propietario}
                            />
                        <InputC
                            name="fecha"
                            value={fecha}
                            onChange={handleChange}
                            type="date"
                            error={errors.fecha}
                            />
                        <InputC
                            name="hora"
                            value={hora}
                            onChange={handleChange}
                            type="time"
                            error={errors.hora}
                            />
                        <TextAreaC
                            name="sintomas"
                            value={sintomas}
                            onChange={handleChange}
                            error={errors.sintomas}
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
