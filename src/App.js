import React, { useState } from "react";
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
  const [searchKey, setSearchKey] = useState("");
  const getSearchKey = (data) => {
    console.log(data);
    setSearchKey(data);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage handleData={getSearchKey} />
          </Route>

          <Route path={`/search/${searchKey}`}>
            <SearchPage searchKey={searchKey}/>
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
