import { useState } from "react";

export const AddCategory = (props:any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
};

const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setCategories((categories: any) => [...categories, inputValue]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        className="input-text"
      />
    </form>
  );
};
