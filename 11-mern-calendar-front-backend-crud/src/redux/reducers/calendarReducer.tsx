import moment from 'moment';
import { actionTypes } from '../types/type';

export type CalendarActon = 
| {type:actionTypes.eventAddNew, payload:  {
    title: string;
    start: Date;
    end: Date;
    // bgcolor: string;
    notes: string;
    id:number
    user: {
        _id: string;
        name: string;
    };
} }
| {type:actionTypes.eventSetActive , payload: string }
| {type:actionTypes.eventClearActiveEvent }
| {type:actionTypes.eventUpdated, payload: any }
| {type:actionTypes.eventDeleted, payload: any }
| {type:actionTypes.eventLoaded, payload: any }

export interface EventState {
    events: {
        title: string;
        start: Date;
        end: Date;
        // bgcolor: string;
        notes: string;
        id:number
        user: {
            _id: string;
            name: string;
        };
    }[],
    activeEvent: null | any
}
            
const initialState:EventState = {
    events: [
        {
            title: 'Titulo del evento',
            start: moment().toDate(),
            end: moment().add(2, 'hour').toDate(),
            // bgcolor: '#fafafa',
            notes: '123',
            id: 1,
            user: {
                _id: '123',
                name: 'Name del evento'
            }
        },
    ],
    activeEvent: null
};
// const initialState:EventState = {
//     events: [],
//     activeEvent: null
// };

export const calendarReducer = (state:EventState = initialState, action:CalendarActon ):EventState => {
    switch (action.type) {
        case actionTypes.eventAddNew:
            return {
                ...state,
                // activeEvent: action.payload
                events:[
                    ...state.events,
                    action.payload
                ]
            }
            
        case actionTypes.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case actionTypes.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case actionTypes.eventUpdated:
            return {
                ...state,
                activeEvent: null,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }

        case actionTypes.eventDeleted:
            return {
                ...state,
                activeEvent: null,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
            }

        // Leer los eventos de la BD
        case actionTypes.eventLoaded:
            return {
                ...state,
                events:[...action.payload]
            }

        default:
            return state;
    }
}