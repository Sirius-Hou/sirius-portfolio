import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Front-end Developer",
          "Gamer",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "custom-typewriter", // Add custom wrapper class
      }}
    />
  );
}

export default Type;