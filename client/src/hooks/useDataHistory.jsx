import { useEffect, useState } from 'react';

import storageService from '../services/storageService';

const useDataHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const localHistory = storageService.getHistory();
    if (localHistory) {
      setHistory(localHistory);
    }
  }, []);

  useEffect(() => {
    if (history.length) {
      storageService.saveHistory(history);
    }
  }, [history]);

  const addHistory = (...data) => {
    const truthfulData = data.filter(item => item);
    if (truthfulData.length) {
      setHistory(truthfulData.concat(history));
    }
  };

  const clearHistory = () => {
    storageService.clearHistory();
    setHistory([]);
  };

  return [history, addHistory, clearHistory];
};

export default useDataHistory;
