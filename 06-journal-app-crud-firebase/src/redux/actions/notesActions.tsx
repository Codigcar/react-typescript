import { db } from "../../firebase/firebase-config";
import { ActionType } from '../types/type';


export const startNewNote = () => {
    return async(dispatch:any, getState:any) => {
        const {uid} = getState().auth;
        console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        // const doc = await db.collection('primera').add({body:'body',title:'title22'})
        // console.log(doc);
        dispatch(activeNote(uid, newNote));
    }
}


export const activeNote = (id:string, note:any) => {
    return {
        type: ActionType.notesActive,
        payload: {
            id,
            ...note
        }
    }
}
