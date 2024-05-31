import React from "react";
import CatGeneratorHeader from "../components/CatGeneratorHeader";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <CatGeneratorHeader />
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/">CatSearch</Link>
    </div>
  );
}

export default HomePage;