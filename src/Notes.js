import React from 'react';
import { useLocation } from 'react-router-dom';

const TargetPage = () => {
  const location = useLocation();
  const { note } = location.state || {};
  if (!note) {
    return <div>Loading...</div>; // Render a loading state or handle the absence of data
  }
  return (
    
    <div>
      <p>Name: {note.title}</p>
      
    </div>
  );
};

export default TargetPage;
