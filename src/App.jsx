import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import { useSelector } from 'react-redux';

function App() {
  const searchKey = useSelector((state) => state.searchKey.value);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path={`/search/${searchKey}`}>
            <SearchPage />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
