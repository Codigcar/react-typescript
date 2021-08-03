import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { JournalEntries } from './JournalEntries'
import { NadaSelected } from './NadaSelected'
import { Sidebar } from './Sidebar'

export interface NotesRootState {
    notes:{
        active: {
            id: string,
            title: string,
            body: string,
            imageUrl: string,
            date: number 
        } | null
    }
}

export const JournalScreen = () => {

    const parteActiveDelState = useSelector((state: NotesRootState) => state.notes.active);
    console.log(parteActiveDelState);
    
    return (
        <div className="flex ">
            <Sidebar />

            {/* <NadaSelected /> */}
                {/* <NoteScreen /> */}
            {
                (parteActiveDelState)
                    ? <NoteScreen />
                    : <NadaSelected />

            }
        </div>
    )
}
