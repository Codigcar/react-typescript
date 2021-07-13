import { useEffect } from 'react';
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category:string) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then(gifs => {
                setTimeout(() => {
                    setState({
                        data: gifs,
                        loading: false
                    }) 
                }, 3000);
            })
    }, [category])

    return state;
}