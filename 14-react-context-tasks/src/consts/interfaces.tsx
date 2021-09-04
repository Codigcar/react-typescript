export interface FormInterface {
    id:string;
    title: string;
    description: string;
    done: boolean; 
}

export const InitialStateCita: FormInterface = {
    id:'',
    title: '',
    description: '',
    done: false,
}

export interface PropsFormLayout {
    crearCita: (newCita: any) => void
}