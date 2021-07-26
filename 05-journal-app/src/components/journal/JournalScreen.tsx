import React from 'react'
import { JournalEntries } from './JournalEntries'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main>
                <h1>Main content</h1>
            </main>
            
        </div>
    )
}
