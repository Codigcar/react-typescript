import { useForm } from '../hooks/useForm';
import { InputC } from '../comon/Input';
import { TextAreaC } from '../comon/TextArea';
import { ButtonC } from '../comon/Button';
import { FormInterface, InitialStateCita, PropsFormLayout } from '../../consts/interfaces';
// npm i --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { GlobalContext } from '../../stateManagement/context/GlobalContext';



export const FormLayout = (/* {crearCita}:PropsFormLayout */) => {

    const context = useContext(GlobalContext);
    console.log('context formlayout: ', context);
    

    // Form
    const { formulario, handleChange, errors, setErrors } = useForm<FormInterface>(InitialStateCita);
    const { title, description } = formulario;

    // Validar errores
    const validate = (fieldValues = formulario) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title.trim() ? "" : "This field is required"
       
        setErrors({
            ...temp
        })
        // console.log('temp: ', temp);
        
        if (fieldValues === formulario)
            return Object.values(temp).every(x =>{ console.log('x: ',x);
             return (x === "" || x === false)})
    }

    // Submit
    const submit = (e: any) => {
        e.preventDefault();
        // console.log('vacio');

        if (validate()) {
            console.log('submit');
            formulario.id = uuidv4();
            // crearCita(formulario)
            console.log(formulario);
            
        }
    }

    return (
        <form onSubmit={submit} className="flex flex-col items-center ">
            <InputC
                label="title"
                name="title"
                value={title}
                onChange={handleChange}
                error={errors.title}
            />
            <TextAreaC
                name="description"
                value={description}
                onChange={handleChange}
                error={errors.description}
            />

            <ButtonC title="Agregar Cita" />

        </form>
    )
}
