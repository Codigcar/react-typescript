import { types } from 'util';
import { actionTypes } from '../types/type';



export const eventAddNew = (event:any) => {
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