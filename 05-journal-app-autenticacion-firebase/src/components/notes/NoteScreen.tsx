import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="flex flex-col w-full h-full ">
            <NotesAppBar />

            <div className="flex flex-col h-screen p-5 ">
                <input className="mb-3 text-3xl font-bold text-gray-500 outline-none" type="text" placeholder="Some awesome title" autoComplete="off" />
                <textarea className="flex-auto text-xl border border-black outline-none resize-none " placeholder="What happened today"></textarea>
                <div>
                    <img src="https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg" alt="" className="h-40"  />
                </div>
            </div>
        </div>
    )
}
