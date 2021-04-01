import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Home from './pages/Home';
import History from './pages/History';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';

import { GlobalProvider } from './context/GlobalState';

import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <GlobalProvider>
      <Router>
        <Header />
        {!user ? (
          <SignIn />
        ) : (
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/history" component={History}></Route>
              <Route path="/statistics" component={Statistics}></Route>
              <Route path="/settings" component={Settings}></Route>
            </Switch>
          </div>
        )}
      </Router>
    </GlobalProvider>
  );
};

export default App;
