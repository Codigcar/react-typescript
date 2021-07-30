import { UIAction } from "../reducers/uiReducer"
import { ActionType } from '../types/type';


export const setError = (err: string) => {
    return {
        type: ActionType.UISetError ,
        payload: err
    }
};

export const removeError = () => {
    return {
        type: ActionType.UIRemoveError
    }
};