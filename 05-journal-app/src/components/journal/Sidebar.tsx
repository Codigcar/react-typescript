import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="bg-gray-600 text-white w-80 flex flex-col h-screen pl-5 pr-5">
            <div>
                <h3 className="mt-5">
                    <i className="fas fa-moon"></i>
                    <span>Carlos</span>
                </h3>

                <button>
                    Logout
                </button>
            </div>
            <div className="flex justify-center items-center flex-col hover:text-gray-500  transition duration-500 mt-10">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="cursor-pointer">New Entry</p>
            </div>
        </aside>
    )
}
