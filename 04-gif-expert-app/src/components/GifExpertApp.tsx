import React from "react";
import { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  // const categories = ['category1','category2','category3'];
  const [categories, setCategories] = useState([
    "category1",
    "category2",
    "category3",
  ]);

  return (
    <>
      <h1>Encuentra tus gifs </h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>  
        {categories.map((categories, i) => {
          return <li key={i}>{categories}</li>;
        })}
      </ol>
    </>
  );
};
