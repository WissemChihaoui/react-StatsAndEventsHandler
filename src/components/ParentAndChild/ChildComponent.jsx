import React from 'react';

const ChildComponent = (props) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Child Component</h3>
      <button onClick={props.updateValue}>Update Value in Parent</button>
    </div>
  );
}

export default ChildComponent;
