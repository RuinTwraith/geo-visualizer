import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/a">
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
