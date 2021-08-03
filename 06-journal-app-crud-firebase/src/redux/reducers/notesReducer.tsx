import React from 'react'

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

export const notesReducer = (state: NoteState = noteInitialState, action: any): NoteState => {
    /* switch (action) {
        case value:
            
            break;
    
        default:
            break;
    } */
    return state;
}