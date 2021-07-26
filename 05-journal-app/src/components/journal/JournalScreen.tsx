import React from 'react'
import { JournalEntries } from './JournalEntries'
import { NadaSelected } from './NadaSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="flex ">
            <Sidebar />
            <main className="w-screen bg-blue-500">
                <NadaSelected />
            </main>
            
        </div>
    )
}
