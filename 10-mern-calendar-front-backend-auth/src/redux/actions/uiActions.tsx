import { actionTypes } from '../types/type';



export const uiOpenModal = () => {
    return {
        type: actionTypes.uiOpenModal
    }
}

export const uiCloseModal = () => {
    return {
        type: actionTypes.uiCloseModal
    }
}