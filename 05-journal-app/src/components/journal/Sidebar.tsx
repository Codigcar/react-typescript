import React from 'react'
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
    return (
        <aside className="flex flex-col h-screen pl-5 pr-5 text-white bg-gray-600 w-96">
            <div>
                <h3 className="mt-5">
                    <i className="fas fa-moon"></i>
                    <span>Carlos</span>
                </h3>

                <button>
                    Logout
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 transition duration-500 hover:text-gray-500">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="cursor-pointer">New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
