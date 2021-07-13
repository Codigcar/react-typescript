import React from 'react'

export const Gif = (props:any) => {
    return (
        <div className="card">
            <img src={props.url} alt="props.title" />
            <p>{props.title}</p>
        </div>
    )
}
