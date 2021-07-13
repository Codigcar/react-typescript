import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Gif } from './Gif';
import { getGifs } from '../helpers/getGifs';

interface propsInterface {
    category:string;
}
export interface gifType {
    id: string;
    title: string;
    images: { downsized_medium: { url: string; }; }; 
}

export const Gifs = (props:propsInterface) => {
   
    
    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        getGifs(props.category)
            .then(gifs => setGifs(gifs));
    }, [props])
    
    return (
        <>
            <h3>{props.category}</h3>
            <div className="card-grid">
                <ol>
                    {
                        /* gifs.map((gif:gifType) => (
                            <li key={gif.id}>{ gif.title }</li>
                        )) */
                        gifs.map((gif:gifType) => (
                            <Gif key={gif.id} {...gif} />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
