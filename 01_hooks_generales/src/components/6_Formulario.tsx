import { useForm } from '../hooks/useForm'

interface FormData {
    email: string,
    nombre: string,
    edad: number
}

export const Formulario = () => {

    // const [formulario, setFormulario] = useState({email:'', nombre:''});

    // const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    //     // console.log(ev.target.name); = nombre/email
    //     // console.log(ev.target.value); = valor escrito
    //     setFormulario({
    //         ...formulario,
    //         [ev.target.name]: ev.target.value
    //     });
        
    // }

    // -- remplanzando por un CustomHooks
    
    const { formulario, handleChange } = useForm<FormData>( { email:'', nombre:'Carlos Castilla',edad:99 } );


    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input name="email" onChange={ (ev)=> handleChange(ev)} type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input name="nombre" onChange={handleChange} type="text" className="form-control" value={formulario.nombre} />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
