export interface FormInterface {
    mascota: string;
    propietario: string;
    fecha: string;
    hora: string;
    sintomas: string;
}

export const InitialStateCita: FormInterface = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

export interface PropsFormLayout {
    crearCita: (newCita: any) => void
}