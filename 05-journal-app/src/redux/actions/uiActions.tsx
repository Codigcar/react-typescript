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

export const startLoading = () => {
    return {
        type: ActionType.UIStartLoading
    }
}

export const finishLoading = () => {
    return {
        type: ActionType.UIFinishLoading
    }
}