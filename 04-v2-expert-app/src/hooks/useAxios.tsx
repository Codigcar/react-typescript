import { useState, useEffect } from 'react';
import { GifsAPI } from '../interface/GifsInterface';
import { getAllGifs } from '../api/getGifs';



export const useAxios = (category:string) => {

    const [gifsListFound, setGifsListFound] = useState<GifsAPI>();
    const [isLoading, setIsLoading] = useState(true);
    
    const getGifs = async() => {
        setIsLoading(true); 
        const gifs = await getAllGifs.get<GifsAPI>(category);
        setTimeout(() => {
            setGifsListFound(gifs.data);
            setIsLoading(false); 
        }, 1500);
    }

    useEffect(() => {
        getGifs();
    }, [category])

    return {
        gifsListFound,
        isLoading
    }
}