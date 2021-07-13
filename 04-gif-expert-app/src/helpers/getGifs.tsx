import { gifType } from '../components/Gifs';


export const getGifs = async(category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const arrayGifs = data.map((gif: gifType) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })
    // console.log(arrayGifs);
    // setGifs(arrayGifs);
    return arrayGifs;

    
}