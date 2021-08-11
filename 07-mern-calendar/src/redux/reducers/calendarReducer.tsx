import moment from 'moment';

// export type CalendarActon = 
// | {type: }

export interface UIEventReducer {
    events: {
        title: string;
        start: Date;
        end: Date;
        bgcolor: string;
        user: {
            _id: string;
            name: string;
        };
    }[],
    activeEvent: null
}

const initialState:UIEventReducer = {
    events: [
        {
            title: 'Titulo del evento',
            start: moment().toDate(),
            end: moment().add(2, 'hour').toDate(),
            bgcolor: '#fafafa',
            user: {
                _id: '123',
                name: 'Name del evento'
            }
        }
    ],
    activeEvent: null
};

export const calendarReducer = (state = initialState/* , action */) => {
    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         return state;
    // }
    return state;
}