import React from 'react';
import moment from 'moment';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Navbar } from '../../components/ui/Navbar';
import { messages } from '../../helpers/calendar-idioma';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

moment.locale('es');
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const myEventsList = [{
    title: 'Curso Seminario 2',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
            />
        </div>
    )
}
