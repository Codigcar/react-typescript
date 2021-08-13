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
        default:
            return state;
    }
}