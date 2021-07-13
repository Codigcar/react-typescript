import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Gif } from './Gif';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface propsInterface {
    category:string;
}
export interface gifType {
    id: string;
    title: string;
    images: { downsized_medium: { url: string; }; }; 
}

export const Gifs = (props:propsInterface) => {
   
    const {data, loading} = useFetchGifs(props.category);
    
    
    // const [gifs, setGifs] = useState([]);
   /*  useEffect(() => {
        getGifs(props.category)
            .then(gifs => setGifs(gifs));
    }, [props]) */
    
    return (
        <>
            <h3>{props.category}</h3>

            {
                loading ? <p>Loading..</p>
                :

            
            <div className="card-grid">
                <ol>
                    {
                        /* gifs.map((gif:gifType) => (
                            <li key={gif.id}>{ gif.title }</li>
                            )) */
                        data.map((gif:gifType) => (
                            <Gif key={gif.id} {...gif} />
                            ))
                    }
                </ol>
            </div>
                        }
        </>
    )
}
