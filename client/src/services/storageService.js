const HISTORY_KEY = 'koodihaaste:dataHistory';

const getHistory = () => JSON.parse(atob(localStorage.getItem(HISTORY_KEY)));

const saveHistory = (history) => {
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
