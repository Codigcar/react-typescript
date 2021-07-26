import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
    const entries = [1,2,3,4,5,6];

    return (
        <div className="flex-auto mt-10 ">
            {
                entries.map(value => (<JournalEntry key={value} />))
            }
        </div>
    )
}
