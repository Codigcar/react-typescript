import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props:any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
};

const handleSubmit = (e: any) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      props.setCategories((categories: any) => [inputValue, ...categories,]);
      setInputValue('');
    }
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

AddCategory.prototype = {
  props: PropTypes.func.isRequired
}