import { db } from "../../firebase/firebase-config";
import { ActionType } from '../types/type';


export const startNewNote = () => {
    return async(dispatch:any, getState:any) => {
        const {uid} = getState().auth;
        console.log(uid,'sss');

        // const newNote = {
        //     title: '',
        //     body: '',
        //     // date: new Date().getTime()
        // }
        
        // const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
        // await db.c                               ollection('primera').doc().set({title:'title'});
        // await db.collection('links').add({title:'title'});
        const doc = await db.collection('primera').add({body:'body',title:'title22'})
        console.log(doc);
    }
}



