import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("default");

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit realizado!");
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
