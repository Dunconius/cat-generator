// CatGeneratorHeader.jsx
import React from "react";
import "./CatGeneratorHeader.css";


export default function getCatsButton({ onFetchCats }) {
  return (
    <div>
      <button className="getCatsButton" onClick={onFetchCats}>Get Cats!</button>
    </div>
  );
}