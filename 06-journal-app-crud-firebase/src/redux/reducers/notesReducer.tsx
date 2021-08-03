import React from 'react'
import { ActionType } from '../types/type';

/* 
    {
        notes: [],
        active: null || {
            id: 'ASDWERE233',
            title: '',
            body: '',
            imageUrl: '',
            date: 123123
        }
    }
 */

    export type NoteAction = 
    | {type: ActionType.notesActive ,payload: {id:string, title:string, body:string, imageUrl:string, date:number}}

export interface NoteState {
    notes: [];
    active: {
        id: string,
        title: string,
        body: string,
        imageUrl: string,
        date: number 
    } | null
}

const noteInitialState: NoteState = {
    notes: [],
    active: null
}

export const notesReducer = (state: NoteState = noteInitialState, action: NoteAction): NoteState => {
    switch (action.type) {
        case ActionType.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
    
        default:
            return state;
    }
    
}