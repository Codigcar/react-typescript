import React from 'react'
import PropTypes from 'prop-types';

export const Gif = (props:any) => {
    return (
        <div className="card">
            <img src={props.url} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}
/* export const Gif = ({title, url}:any) => {
    return (
        <div className="card">
            <img src={url} alt="props.title" />
            <p>{title}</p>
        </div>
    )
} */

Gif.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
