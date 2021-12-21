import React from "react";
import "./Work.css";

const handleClick = () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
};

const Work = () => {
  return (
    <div>
      <div className="content">
        <button className="btn" onClick={handleClick}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Work;
