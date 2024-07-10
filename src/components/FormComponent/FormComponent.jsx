import React, { useState } from 'react';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    console.log('event', event);
    console.log('event.target', event.target);
    console.log('event.target.value',event.target.value);
    setInputValue(event.target.value);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <form>
        <label>
          Enter text:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <p>Input Value: {inputValue}</p>
    </div>
  );
}

export default FormComponent;
