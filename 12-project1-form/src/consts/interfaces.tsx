export interface FormInterface {
    id:string;
    mascota: string;
    propietario: string;
    fecha: string;
    hora: string;
    sintomas: string;
}

export const InitialStateCita: FormInterface = {
    id:'',
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

export interface PropsFormLayout {
    crearCita: (newCita: any) => void
}