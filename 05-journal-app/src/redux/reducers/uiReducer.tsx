import { ActionType } from '../types/type';

export type UIAction = 
| {type:ActionType.UISetError , payload: string}
| {type: ActionType.UIRemoveError }

export interface UIState {
    loading: boolean,
    msgError: string
}

const uiInitialState: UIState = {
    loading: false,
    msgError: ''
}

export const uiReducer = (state: UIState = uiInitialState, action: UIAction): UIState => {
    switch (action.type) {
        case ActionType.UISetError:
            return {
                ...state,
                msgError: action.payload
            }
        case ActionType.UIRemoveError:
            return {
                ...state,
                msgError: ''
            }
        default:
            return state;
    }
}