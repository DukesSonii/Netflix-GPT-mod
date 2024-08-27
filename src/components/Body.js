import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SearchResults from "./SearchResults";
import Error from "./Error";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/searchresults/:query" element={<SearchResults />} />
        <Route path="*" element={<Error />} /> {/* Wildcard route */}
      </Routes>
    </div>
  );
};

export default Body;
