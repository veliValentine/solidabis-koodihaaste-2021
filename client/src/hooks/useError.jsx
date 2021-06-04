import { useState, useEffect } from 'react';

let timeoutId;

const useError = () => {
  const [error, setError] = useState(null);

  useEffect(() => () => clearTimeout(timeoutId), []);

  const updateError = (message, seconds = 10) => {
    setError(message);
    clearError(seconds);
  };

  const clearError = (seconds = 0) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setError(null), 1000 * seconds);
  };

  return [error, updateError];
};

export default useError;
