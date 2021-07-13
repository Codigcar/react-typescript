import React from 'react'

export const GifExpertApp = () => {

    const categories = ['category1','category2','category3'];

    return (
        <>
          <h1>Encuentra tus gifs </h1>  
          <hr />
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
