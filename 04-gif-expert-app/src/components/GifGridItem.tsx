import React from 'react'

interface propsInterface {
    category:string;
}
type imgType = {
    id: string;
    title: string;
    images: { downsized_medium: { url: string; }; }; 
}

export const GifGridItem = (props:propsInterface) => {

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gif = data.map((img: imgType) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gif);
        
    }
    getGifs();
    return (
        <div>
            {props.category}
        </div>
    )
}
