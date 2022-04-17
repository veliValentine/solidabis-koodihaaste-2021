import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import useError from './hooks/useError';
import useDataHistory from './hooks/useDataHistory';

import History from './components/History';
import Error from './components/Error';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

const App = () => {
  const [error, updateError] = useError();
  const [dataHistory, addHistory, clearHistory] = useDataHistory();

  return (
    <Router>
      <NavBar />
      <Error message={error} />
      <Switch>
        <Route path="/history">
          <History history={dataHistory} clearHistory={clearHistory} />
        </Route>
        <Route path="/">
          <MainPage updateError={updateError} addHistory={addHistory} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
