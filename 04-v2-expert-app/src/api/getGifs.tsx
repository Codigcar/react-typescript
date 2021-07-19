import axios from 'axios';

export const getAllGifs = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs/search?q=',
    params:{
        limit:10,
        api_key:'vfV8SOvefLtVRj5pOOTcRZgepQ0zs29o'
    }
}); 