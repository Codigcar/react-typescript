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