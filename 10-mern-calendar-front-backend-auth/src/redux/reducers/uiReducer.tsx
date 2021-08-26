import { actionTypes } from '../types/type';

export type UIAction =
    | { type: actionTypes.uiOpenModal }
    | { type: actionTypes.uiCloseModal }

export interface UIState {
    modalOpen: boolean
}

const initialState: UIState = {
    modalOpen: false
}

export const uiReducer = (state: UIState = initialState, action: UIAction): UIState => {
    switch (action.type) {
        case actionTypes.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case actionTypes.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }

        default:
            return state;
    }
}