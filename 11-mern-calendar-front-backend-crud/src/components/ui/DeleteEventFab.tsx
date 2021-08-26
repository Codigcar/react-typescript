import React from 'react'
import { useDispatch } from 'react-redux';
import { eventDeleted } from '../../redux/actions/eventsActions';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eventDeleted());
    }

    return (
        <button className="fixed p-2 text-white bg-red-600 rounded left-6 bottom-6"
            onClick={handleDelete}>
            <i className="fas fa-trash"></i>
            <span>Borrar evento</span>
        </button>
    )
}
