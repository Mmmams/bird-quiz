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

  const handleGoNextLevel = () => {};

  return (
    <div>
      <button
        className={true ? "custom-button" : "blockedBtn"}
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
