import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && <p>This is a toggled paragraph.</p>}
    </div>
  );
}

export default ToggleVisibility;
