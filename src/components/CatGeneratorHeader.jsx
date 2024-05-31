// CatGeneratorHeader.jsx
import React from "react";
import "./CatGeneratorHeader.css";
import catLogo from '../assets/catLogoWhite.png';

export default function CatGeneratorHeader({ onFetchCats }) {
  return (
    <div className="catGeneratorHeader">
      <div>
        <h1>Catstagram</h1>
        <img className="catLogo" src={catLogo} alt="cat logo" />
      </div>
      
      <button className="getCatsButton" onClick={onFetchCats}>Get Cats!</button>
    </div>
  );
}
