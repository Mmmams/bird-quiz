import React from "react";

import "./qustion.styles.scss";

import {
  selectRandom,
  selectAudioList,
} from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const Question = () => {
  const audioList = useSelector(selectAudioList);
  const randomVal = useSelector(selectRandom);
  console.log(audioList + " " + randomVal);
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
        <audio
          className="question-audio"
          controls
          src={audioList[randomVal]}
        ></audio>
      </div>
    </div>
  );
};

export default Question;
