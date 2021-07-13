import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Gif } from './Gif';

interface propsInterface {
    category:string;
}
type gifType = {
    id: string;
    title: string;
    images: { downsized_medium: { url: string; }; }; 
}

export const Gifs = (props:propsInterface) => {

    const [gifs, setGifs] = useState([]);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const arrayGifs = data.map((gif: gifType) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })
        console.log(arrayGifs);
        setGifs(arrayGifs);
    }

    useEffect(() => {
        getGifs();
    }, [])

    return (
        <div>
            <h3>{props.category}</h3>
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
    )
}
