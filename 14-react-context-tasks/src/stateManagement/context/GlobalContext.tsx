import { createContext, useReducer } from 'react';
import { FormInterface, InitialStateCita } from '../../consts/interfaces';
import addReducer from './AppReducer';

// const initialState = {count:0}

const initialState: any = {
    tasks: [
        {
            id: "1",
            title: "primero",
            description: "some description",
            done: false
        },
        {
            id: "2",
            title: "segundo",
            description: "some description",
            done: false
        },
        {
            id: "3",
            title: "tercero",
            description: "some description",
            done: false
        },
    ]
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(addReducer, initialState);

    const addTask = (taskNew:any) => {
        dispatch({ type: 'ADD_TYPE', payload: taskNew });
    }

    const deleteTask = () => {
        dispatch({type:'DELETE_TYPE'});
    }

    return (
        <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
            {children}
        </GlobalContext.Provider>
    );
}