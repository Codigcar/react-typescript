import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="flex flex-col w-full h-full ">
            {/* flex flex-col h-full */}
            <NotesAppBar />
        </div>
    )
}
