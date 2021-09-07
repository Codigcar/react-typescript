import { useForm } from '../hooks/useForm';
import { InputC } from '../comon/Input';
import { TextAreaC } from '../comon/TextArea';
import { ButtonC } from '../comon/Button';
import { FormInterface, InitialStateCita } from '../../consts/interfaces';
// npm i --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { GlobalContext } from '../../stateManagement/context/GlobalContext';

import { useHistory, useParams } from 'react-router-dom';

interface Params {
    id: any;
}



export const FormLayout = (/* {crearCita}:PropsFormLayout */) => {

    const { addTask, tasks, updateTask } = useContext(GlobalContext);
    // Enviara otra ruta
    const historyRoute = useHistory();
    // extraer el parametros
    const params: Params = useParams();

    // Form
    const { formulario, handleChange, errors, setErrors, setFormulario } = useForm(InitialStateCita);
    const { title, description } = formulario;

    useEffect(() => {
        const taskBD = tasks.find((task: any) => task.id === params.id);
        if (taskBD) {
            console.log('editing');
            setFormulario(taskBD);
        } else {
            console.log('creating');
        }
    }, [params.id, tasks, setFormulario])

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
            return Object.values(temp).every(x => {
                console.log('x: ', x);
                return (x === "" || x === false)
            })
    }

    // Submit
    const submit = (e: any) => {
        e.preventDefault();
        // console.log('vacio');

        if (validate()) {
            console.log('submit');
            // crearCita(formulario)
            console.log(formulario);
            // addTask({ id: formulario.id, title: 'nuevo' , description:'description'});
            if(params.id){
                updateTask(formulario);
            } else {
                formulario.id = uuidv4();
                addTask(formulario);
            }

            historyRoute.push('/');
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
