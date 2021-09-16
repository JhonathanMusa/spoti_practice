import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Details } from "./Details";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

export const Landing = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/details/:id" component={Details} />
    </Router>
  );
};
