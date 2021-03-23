import React from 'react';
import Header from "./Header";
import GetFeatured from "./GetFeatured";
import SearchBar from "./SearchBar";
import ViewChart from "./ViewChart";
import TopSearches from "./TopSearches";

function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="top-places_charts">
        <TopSearches />
        <ViewChart />
      </div>
      <GetFeatured />
    </div>
  )
}

export default HomePage;
