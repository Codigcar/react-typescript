import React from 'react'
import { useState } from 'react';
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {

    // const categories = ['category1','category2','category3'];
    const [categories, setCategories] = useState(['category1','category2','category3'])

    const handleAdd = () => {
        setCategories(['category0', ...categories])
    }

    return (
        <>
          <h1>Encuentra tus gifs </h1>  
          <AddCategory />
          <hr />
          <button onClick={handleAdd} >Agregar</button>
          <ol>
              {
                  categories.map((categories,i) => {
                      return <li key={i}>{categories}</li>
                  })
              }
          </ol>
        </>
    )
}
