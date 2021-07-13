import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { Gifs } from "./Gifs";

export const GifExpertApp = () => {
  // const categories = ['category1','category2','category3'];
  const [categories, setCategories] = useState(["category1"]);

  return (
    <>
      <h1>Encuentra tus gifs </h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>  
        {
            categories.map((category, i) => (
            //   return <li key={i}>{categories}</li>;
                <Gifs key={i} category={category} />
            ))
        }
      </ol>
    </>
  );
};
