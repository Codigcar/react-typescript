import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../helpers/root-state';
import { startLogoutAction } from '../../redux/actions/authActions';

export const Navbar = () => {

    const parteDelSelecto_Name = useSelector((state: RootState) => state.auth.name);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogoutAction());
    }

    return (
        <div className="flex justify-between mx-1 my-2">
            <div className="font-bold">
                Nombre del usuario: {parteDelSelecto_Name}
            </div>
            <button className="p-2 ml-3 font-bold text-white bg-red-600 rounded" onClick={handleLogout}>
                Logout
            </button>
        </div>

    )
}
