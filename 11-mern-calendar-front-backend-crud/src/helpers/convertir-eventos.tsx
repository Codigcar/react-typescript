import moment from 'moment';

// Convertir la fecha Start y End del Evento traido de la BD
// Convertirlos de String a Date
export const convertirEventosString_A_Date_FechaStartAndEnd = (events = []) => {
    return events.map(
        (e:any) => {
            return {
                ...e,
                end: moment(e.end).toDate(),
                start: moment(e.start).toDate()
            }
        }
    )
}