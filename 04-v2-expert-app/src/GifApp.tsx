import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AddGifs } from './components/AddGifs';
import { Gifs } from './components/Gifs';

export const GifApp = () => {

    const [categoriesName, setCategoriesName] = useState(['Naruto']);

    return (
        <div>
            <h1>Busca tu gif favorito</h1>
            <AddGifs setCategoriesName={setCategoriesName} />
            <ol>
                {
                    // categoriesName.map(item => <li key={item}>{item}</li> )
                    categoriesName.map((item,i) => (<Gifs key={i} categoryName={item} />) )
                }
            </ol>
        </div>
    )
}
