import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [status, setStatus] = useState('start');

  const toggleStatus = () => {
    setStatus(status === 'start' ? 'stop' : 'start');
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleStatus}>Toggle Status</button>
      {status === 'start' ? <p>System is starting...</p> : <p>System is stopping...</p>}
    </div>
  );
}

export default ConditionalRendering;
