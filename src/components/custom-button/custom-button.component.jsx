import React from "react";

import "./custom-button.styles.scss";

import { selectLevel, selectAnswered } from "../../redux/birds/birds.selector";
import { useDispatch, useSelector } from "react-redux";
import {
  goNextLevelStart,
  cleanBirdInfo,
  chooseCurrentList,
  changeNameList,
  increaseLevel,
  changeAudioList,
  resetAnswer,
  endGame,
  getRandom,
  resetExtraScore,
} from "../../redux/birds/birds.action";

const CustomButton = () => {
  const dispatch = useDispatch();
  const level = useSelector(selectLevel);
  const answered = useSelector(selectAnswered);

  const handleGoNextLevel = () => {
    if (answered) {
      if (level === 5) {
        dispatch(endGame());
      } else {
        dispatch(increaseLevel());
        dispatch(chooseCurrentList(null));
        dispatch(cleanBirdInfo());
        dispatch(changeNameList(level));
        dispatch(changeAudioList(level));
        dispatch(resetAnswer());
        dispatch(goNextLevelStart());
        dispatch(resetExtraScore());
        dispatch(getRandom(null));
      }
    }
  };

  return (
    <div>
      <button
        className={answered ? "custom-button" : "blockedBtn"}
        onClick={() => {
          handleGoNextLevel();
        }}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default CustomButton;
