const HISTORY_KEY = 'koodihaaste:dataHistory';

const getHistory = () => {
  const history = localStorage.getItem(HISTORY_KEY);
  if (!history) {
    return [];
  }
  return JSON.parse(atob(history));
};

const saveHistory = (history = []) => {
  if (!history.length) throw new Error('No history to save');
  localStorage.setItem(HISTORY_KEY, btoa(JSON.stringify(history)));
};

const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};

const storageService = {
  getHistory,
  saveHistory,
  clearHistory,
};

export default storageService;
