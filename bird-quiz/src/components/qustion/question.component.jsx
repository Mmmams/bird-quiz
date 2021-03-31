import React from "react";

import "./qustion.styles.scss";

import {
  selectRandom,
  selectAudioList,
  selectAnswered,
  selectCurrentBirdsInfo,
  selectTitle,
} from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const Question = () => {
  const audioList = useSelector(selectAudioList);
  const randomVal = useSelector(selectRandom);
  const answered = useSelector(selectAnswered);
  const currentInfo = useSelector(selectCurrentBirdsInfo);
  const title = useSelector(selectTitle);
  return (
    <div className="question">
      <div>
        <img
          className="question-image"
          alt="unknown-bird"
          src={
            answered
              ? currentInfo.photos.photo[0].url_m
              : "https://upload.wikimedia.org/wikipedia/ru/f/f3/Flappy_Bird_logo.jpeg"
          }
        />
      </div>
      <div className="question-data">
        <div className="name">{answered ? title[0] : "******"}</div>
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
