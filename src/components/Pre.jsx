import React from "react";
import "../style.css"

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="loading-container">
        <div className="loading-text">
          <span>S</span>
          <span>I</span>
          <span>R</span>
          <span>I</span>
          <span>U</span>
          <span>S</span>
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Pre;
