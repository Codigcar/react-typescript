import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer';
import { authReducer } from './authReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    // TODO: AuthReducer
    // TODO: CalendarReducer
    calendar: calendarReducer,
    auth: authReducer
})