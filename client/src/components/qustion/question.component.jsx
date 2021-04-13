import React, { useRef } from "react";

import "./qustion.styles.scss";

import { useSelector } from "react-redux";

const Question = () => {
  const answered = true;
  return (
    <div className="question">
      <div>
        <img className="question-image" alt="unknown-bird" src="" />
      </div>
      <div className="question-data">
        <div className="name">{answered ? "name" : "******"}</div>
        {true ? (
          <audio className="question-audio" controls src=""></audio>
        ) : (
          <div className="loading">Загрузка...</div>
        )}
      </div>
    </div>
  );
};

export default Question;
