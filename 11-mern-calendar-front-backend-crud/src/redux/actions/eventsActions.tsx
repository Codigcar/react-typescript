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