const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = (endpoint:string, data:any, method:string ='GET' ) => {
    const url = `${baseUrl}/${endpoint}`;
    console.log('url a consultar: ', url);
    console.log('data a enviar: ', JSON.stringify(data));

    if( method === 'GET'){
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    

}