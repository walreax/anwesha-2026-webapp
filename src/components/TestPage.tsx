import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px'
    }}>
      <h1>TEST PAGE - If you see this, routing works!</h1>
    </div>
  );
};

export default TestPage;
