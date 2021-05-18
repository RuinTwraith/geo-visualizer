import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div>
      <Header />
      <SearchPage />
    </div>
  );
}

export default App;
