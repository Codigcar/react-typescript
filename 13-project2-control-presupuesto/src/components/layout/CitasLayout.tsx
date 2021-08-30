import Button from '@material-ui/core/Button'

export const CitasLayout = (props: any) => {
    return (
        <div>
            {props.cita.mascota}

            <Button 
                variant="contained"
                color="secondary"
                onClick={() => props.eliminarCita(props.cita.id)}
            >
                Eliminar Cita
            </Button>
        </div>
    )
}
