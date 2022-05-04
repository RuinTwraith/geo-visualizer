import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const getSearchKey = (data) => {
    console.log(data);
    setSearchKey(data);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage handleData={getSearchKey} />
          </Route>

          <Route path={`/search/${searchKey}`}>
            <SearchPage searchKey={searchKey} />
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
