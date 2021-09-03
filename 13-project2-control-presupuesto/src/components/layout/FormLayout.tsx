import { useForm } from '../hooks/useForm';
import { InputC } from '../comon/Input';
import { TextAreaC } from '../comon/TextArea';
import { ButtonC } from '../comon/Button';
import { FormInterface } from '../../consts/interfaces';
// npm i --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid';


export const FormLayout = ({setPresupuesto, setRestante}: any) => {

    const InitialStateCita: FormInterface = {
        presupuesto:''
    }

    // Form
    const { formulario, handleChange, errors, setErrors } = useForm<FormInterface>(InitialStateCita);
    const { presupuesto } = formulario;

    // Validar errores
    const validate = (fieldValues = formulario) => {
        let temp = { ...errors }

        if ('presupuesto' in fieldValues){
            temp.presupuesto = (fieldValues.presupuesto.trim()) ? "" : "Campo requerido"
            if(temp.presupuesto === ""){
                temp.presupuesto = parseInt(fieldValues.presupuesto) > 0 ? "" : "Solo valores positivos"
            }
        }
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
            setPresupuesto(parseInt(presupuesto));
            setRestante(parseInt(presupuesto));
            // formulario.id = uuidv4();
            // crearCita(formulario)
            
        }
    }

    return (
        <form onSubmit={submit}>
            <h1>Coloca tu presupuesto</h1>
            <InputC
                label="Presupuesto"
                name="presupuesto"
                value={presupuesto}
                onChange={handleChange}
                error={errors.presupuesto}
                type="number"
            />
            
            <ButtonC title="Agregar Cita" />

        </form>
    )
}
