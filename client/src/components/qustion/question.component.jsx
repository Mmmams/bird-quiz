import React, { useEffect, useRef } from "react";

import "./qustion.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { setQuestionBird } from "../../redux/birds/birds.action";

import {
  selectRandom,
  selectQuestionBird,
  selectAnswered,
  selectCurrentBirdsArray,
} from "../../redux/birds/birds.selector";

const Question = () => {
  const dispatch = useDispatch();

  const currentArray = useSelector(selectCurrentBirdsArray);
  const random = useSelector(selectRandom);
  const questionBird = useSelector(selectQuestionBird);
  const answered = useSelector(selectAnswered);

  const currentAudio = useRef(null);
  if (answered === true) {
    currentAudio.current.pause();
  }

  useEffect(() => {
    if (currentArray) {
      dispatch(setQuestionBird(currentArray[random]));
    }
  }, [random]);

  return (
    <div className="question">
      <div>
        <img
          className="question-image"
          alt="unknown-bird"
          src={
            answered
              ? questionBird.image
              : "https://image.freepik.com/free-vector/pixel-art-cartoon-bird-icon-set-8bit-autumn_41992-931.jpg"
          }
        />
      </div>
      <div className="question-data">
        <div className="name">{answered ? questionBird.name : "******"}</div>
        {questionBird ? (
          <audio
            className="question-audio"
            controls
            src={questionBird.audio}
            ref={currentAudio}
          ></audio>
        ) : (
          <div className="loading">Загрузка...</div>
        )}
      </div>
    </div>
  );
};

export default Question;
