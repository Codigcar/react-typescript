import React from 'react'

export const Gif = (props:any) => {
    return (
        <>
        <img src={props.url} alt="props.title" />
            <h3>{props.title}</h3>
        </>
    )
}
