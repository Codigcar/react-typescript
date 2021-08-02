import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="flex items-center justify-between w-full px-2 py-5 text-white bg-blue-600">
            <span>28 de Julio 2021</span>
            <div>
                <button>Picture</button>
                <button className="pl-4">Save</button>
            </div>
        </div>
    )
}
