import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    // TODO: AuthReducer
    // TODO: CalendarReducer
    calendar: calendarReducer
})