import { useForm } from '../hooks/useForm';
import { InputC } from '../comon/Input';
import { TextAreaC } from '../comon/TextArea';
import { ButtonC } from '../comon/Button';
import { FormInterface, InitialStateCita, PropsFormLayout } from '../../consts/interfaces';
// npm i --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid';



export const FormLayout = ({crearCita}:PropsFormLayout) => {

    // Form
    const { formulario, handleChange, errors, setErrors } = useForm<FormInterface>(InitialStateCita);
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
        console.log('vacio');

        if (validate()) {
            console.log('submit');
            
            formulario.id = uuidv4();
            crearCita(formulario)
            // console.log(formulario);
            
        }
    }

    return (
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
    )
}
