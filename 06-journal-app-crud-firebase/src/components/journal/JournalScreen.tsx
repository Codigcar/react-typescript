import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { JournalEntries } from './JournalEntries'
import { NadaSelected } from './NadaSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="flex ">
            <Sidebar />

            {/* <NadaSelected /> */}
                <NoteScreen />
            
        </div>
    )
}
