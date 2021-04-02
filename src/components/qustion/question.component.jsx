import React, { useRef } from "react";

import "./qustion.styles.scss";

import {
  selectRandom,
  selectAudioList,
  selectAnswered,
  selectTitle,
  selectBirdsInfo,
  selectBirdsNames,
} from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const Question = () => {
  const audioList = useSelector(selectAudioList);
  const randomVal = useSelector(selectRandom);
  const answered = useSelector(selectAnswered);
  const nameList = useSelector(selectBirdsNames);
  const birdsInfo = useSelector(selectBirdsInfo);

  const currentAudio = useRef(null);
  if (answered === true) {
    currentAudio.current.pause();
  }

  return (
    <div className="question">
      <div>
        <img
          className="question-image"
          alt="unknown-bird"
          src={
            answered
              ? birdsInfo[randomVal].photos.photo[0].url_m
              : "https://upload.wikimedia.org/wikipedia/ru/f/f3/Flappy_Bird_logo.jpeg"
          }
        />
      </div>
      <div className="question-data">
        <div className="name">
          {answered ? nameList[randomVal][0] : "******"}
        </div>
        <audio
          className="question-audio"
          controls
          src={audioList[randomVal]}
          ref={currentAudio}
        ></audio>
      </div>
    </div>
  );
};

export default Question;
