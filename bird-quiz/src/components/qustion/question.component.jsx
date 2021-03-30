import React from "react";

import "./qustion.styles.scss";

const Question = () => {
  return (
    <div className="question">
      <div className="question-image">
        <img
          alt="unknown-bird"
          src="https://upload.wikimedia.org/wikipedia/ru/f/f3/Flappy_Bird_logo.jpeg"
        />
      </div>
      <div className="question-data">
        <div className="name">******</div>
        <audio className="question-audio" controls></audio>
      </div>
    </div>
  );
};

export default Question;
