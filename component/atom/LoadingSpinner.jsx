// components/LoadingSpinner.jsx
import React from 'react';
import '../../app/globals.css'; // Spinner styling ke liye

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
    </div>
  );
};

export default LoadingSpinner;
