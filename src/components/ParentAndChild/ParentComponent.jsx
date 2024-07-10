import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [value, setValue] = useState(0);

  const updateValue = () => {
    setValue(value+1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Parent Component</h2>
      <p>Value: {value}</p>
      <ChildComponent updateValue={updateValue} />
    </div>
  );
}

export default ParentComponent;
