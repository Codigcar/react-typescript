import { createContext } from 'react';
import { FormInterface } from '../../consts/interfaces';

const initialState = {
    tasks: [
        {
            id: '1',
            title: '1er elemento',
            description: 'Some Description',
            done: false
        },
        {
            id: '2',
            title: '1er elemento',
            description: 'Some Description',
            done: false
        },
        {
            id: '3',
            title: '1er elemento',
            description: 'Some Description',
            done: false
        },
    ],
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }: any) => {

    const addTask = (task:any) => {
        console.log(task);
        
    }

    return (
        <GlobalContext.Provider value={{ ...initialState }}>
            {children}
        </GlobalContext.Provider>
    );
}