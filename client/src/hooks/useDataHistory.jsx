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
      setHistory(history.concat(truthfulData));
    }
  };

  return [history, addHistory];
};

export default useDataHistory;
