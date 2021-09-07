import { createContext, useReducer } from 'react';
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

    const deleteAllTask = () => {
        dispatch({type:'DELETE_TYPE'});
    }
    const deleteTask = (id: any) => {
        dispatch({type:'DELETE_BY_ID_TYPE', payload: id});
    }
    const updateTask = (task:any) => {
        dispatch({type: 'UPDATE_TASK',payload: task})
    }
    const toggleTaskDone = (id:any) => {
        dispatch({type: 'TOGGLE_TASK_DONE', payload: id})
    }

    return (
        <GlobalContext.Provider value={{ ...state, addTask, deleteTask, deleteAllTask, updateTask,toggleTaskDone }}>
            {children}
        </GlobalContext.Provider>
    );
}