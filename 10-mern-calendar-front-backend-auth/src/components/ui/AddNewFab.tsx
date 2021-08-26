import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../redux/actions/uiActions';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(uiOpenModal());
    }

    return (
        <button className="fixed p-2 text-white bg-blue-600 rounded-full w-14 h-14 bottom-4 right-4"
        onClick={handleClick}
        > 
            <i className="fas fa-plus"></i>
        </button>
    )
}
