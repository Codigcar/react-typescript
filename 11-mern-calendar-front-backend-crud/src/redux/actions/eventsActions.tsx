import { types } from 'util';
import { actionTypes } from '../types/type';
import { fetchConToken } from '../../helpers/fetch';
import { useSelector } from 'react-redux';
import { RootState } from '../../helpers/root-state';
import { convertirEventosString_A_Date_FechaStartAndEnd } from '../../helpers/convertir-eventos';
import Swal from 'sweetalert2';


// En los Actions no se puede usar el 'useSelector', por lo que usar el 'getState'
// const parteDelSelector_UIName= useSelector((state:RootState) => state.auth);
export const eventStartAddNewForBackendAction = (event:any) => {
    return async(dispatch:any, getState:any) => {
        console.log('eventStartAddNew: ',event);

        const getStateStateRedux = getState().auth;
        console.log('getState().auth: ', getState().auth);

        const parteDelSelector_Uid  = getStateStateRedux.uid;
        const parteDelSelector_Name  = getStateStateRedux.name;
        
        try {
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();

            console.log('Evento guardado en BD: ',body);
            console.log('parteDelSelector_Uid: ',parteDelSelector_Uid);
            console.log('parteDelSelector_Name: ',parteDelSelector_Name);
            if(body.ok){
                event.id = body.EventCreated.id;
                event.user = {
                    _id: parteDelSelector_Uid,
                    name: parteDelSelector_Name
                }

                dispatch(eventAddNewForRedux(event));
            }

        } catch (error) {
            console.log('error_eventStartAddNew:  ',error );
                        
        }

        
    }
}

const eventAddNewForRedux = (event:any) => {
    return {
        type: actionTypes.eventAddNew,
        payload: event
    }
}

export const eventSetActiveAction = (event:any) => {
    return {
        type: actionTypes.eventSetActive,
        payload: event
    }
}

export const eventClearActiveEventAction = () => {
    return {
        type: actionTypes.eventClearActiveEvent
    }
}

// Actualizar evento Back

export const eventStartUpdateActionFromBack = (event:any) => {
    return async(dispatch:any) => {

        try {
            const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if (body.ok){
                dispatch(eventUpdatedAction(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
            
        } catch (error) {
          console.log('error_eventStartUpdated: ', error);
            
        }

    }
}
// Actualizar evento Front Redux
const eventUpdatedAction = (event:any) => {
    return {
        type: actionTypes.eventUpdated,
        payload: event
    }
}

// // --- End Actualizar
export const eventDeletedAction = () => {
    return {
        type: actionTypes.eventDeleted,
    }
}

// Para leer los eventos registrados en la BD
export const eventStartLoadingAction = () => {
    return async(dispatch:any) => {
        console.log('eventStartLoading');
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();

            const eventsDB = body.eventos;

            const eventsDBConvertido = convertirEventosString_A_Date_FechaStartAndEnd(eventsDB);
            console.log('Traer eventos de la BD (eventStartLoading): ',eventsDBConvertido);
            dispatch(eventLoaded(eventsDBConvertido));

        } catch (error) {
            console.log('error_eventStartLoading', error);
        }
    }
}

const eventLoaded = (events:any) => {
   return {
    type: actionTypes.eventLoaded,
    payload: events
   }
}


