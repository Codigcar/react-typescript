import React from 'react'

export const CalendarEvent = (props:any) => {
    console.log('CalendarEvent: ', props);
    return (
        <div>
            <span></span>
            <strong>{props.event.title}</strong> <br />
            <span>{props.event.user.name}</span>
        </div>
    )
}
