import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../redux/actions/authActions';

export interface AuthRootState {
    auth: {uid:string, name: string};
}

export const Sidebar = () => {

    const dispatch = useDispatch();
    const parteNameDelSatate = useSelector((state:AuthRootState ) => state.auth.name);

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <aside className="flex flex-col h-screen pl-5 pr-5 text-white bg-gray-600 w-96">
            <div>
                <h3 className="mt-5">
                    <i className="fas fa-moon"></i>
                    <span>{parteNameDelSatate}</span>
                </h3>

                <button className="p-1 mt-2 bg-red-600 rounded"
                 onClick={handleLogout}>
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
