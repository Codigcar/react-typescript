import React from 'react';
import moment from 'moment';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Navbar } from '../../components/ui/Navbar';
import { messages } from '../../helpers/calendar-idioma';
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../redux/actions/uiActions';
import { eventSetActive } from '../../redux/actions/eventsActions';
import { AddNewFab } from '../../components/ui/AddNewFab';
import { EventState } from '../../redux/reducers/calendarReducer';

moment.locale('es');
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
// const myEventsList = [{
//     title: 'Titulo del evento',
//     start: moment().toDate(),
//     end: moment().add(2, 'hour').toDate(),
//     bgcolor: '#fafafa',
//     user: {
//         _id: '123',
//         name: 'Name del evento'
//     }
// }]
// const myEventsList = [{}]


export const CalendarScreen = () => {
    const [lastView, setLastView] = useState( localStorage.getItem('ultimaVista') || 'month');
    const dispatch = useDispatch();
    // extraer el evento del reduxState y mostrarlo, para ello el useState
    const myEventsList = useSelector((state:any) => state.calendar.events)

    const eventStyleGetter = (event: any, start:any, end:any, isSelected:any) => {
        const style = {
            backgroundColor: 'red',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block'
        }
        return {
            style
        }
    };

    const onDoubleClick = (e:any) => {
        console.log('onDoubleClick: ',e);
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e:any) => {
        console.log('onSelectEvent: ',e);
        dispatch(eventSetActive(e));
        dispatch(uiOpenModal());
    }

    const onViewChange = (e:any) => {
        console.log('onViewChange: ',e);
        setLastView(e);
        localStorage.setItem('ultimaVista', e);
    }


    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                // enviar el nombre del evento registrado
                components={{event: CalendarEvent}}
                // Cuando se hace 2 click al evento
                onDoubleClickEvent={onDoubleClick}
                // Cuando se selecciona (1 click) el evento
                onSelectEvent={onSelectEvent}
                // Obtener que vista está: Mes, Semana, dia o en Agenda
                onView={onViewChange}
                // Asignarle que vista actual mostrar
                // // view={lastView}
            />

            <AddNewFab />
            
            <CalendarModal />
        </div>
    )
}
