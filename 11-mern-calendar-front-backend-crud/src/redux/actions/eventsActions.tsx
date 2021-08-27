import { types } from 'util';
import { actionTypes } from '../types/type';
import { fetchConToken } from '../../helpers/fetch';
import { useSelector } from 'react-redux';
import { RootState } from '../../helpers/root-state';


// En los Actions no se puede usar el 'useSelector', por lo que usar el 'getState'
// const parteDelSelector_UIName= useSelector((state:RootState) => state.auth);
export const eventStartAddNewForBackend = (event:any) => {
    return async(dispatch:any, getState:any) => {
        console.log('eventStartAddNew: ',event);

        const {parteDelSelector_Name,parteDelSelector_Uid} = getState().auth;

        try {
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();

            console.log('Evento guardado en BD: ',body);
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

export const eventSetActive = (event:any) => {
    return {
        type: actionTypes.eventSetActive,
        payload: event
    }
}

export const eventClearActiveEvent = () => {
    return {
        type: actionTypes.eventClearActiveEvent
    }
}

export const eventUpdated = (event:any) => {
    return {
        type: actionTypes.eventUpdated,
        payload: event
    }
}

export const eventDeleted = () => {
    return {
        type: actionTypes.eventDeleted,
    }
}

// Para leer los eventos registrados en la BD
export const eventStartLoading = () => {
    return async(dispatch:any) => {
        console.log('eventStartLoading');
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();

            const eventsDB = body.eventos;

            console.log('eventStartLoading: ',body);
            dispatch(eventLoaded(eventsDB));
            
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