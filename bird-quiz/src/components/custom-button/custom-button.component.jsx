import React from "react";

import "./custom-button.styles.scss";

import { getRandomValue } from "../../utils";
import { selectLevel, selectAnswered } from "../../redux/birds/birds.selector";
import { useDispatch, useSelector } from "react-redux";
import {
  goNextLevelStart,
  cleanBirdInfo,
  chooseCurrentList,
  changeNameList,
  increaseLevel,
  increaseScore,
  changeAudioList,
  resetAnser,
} from "../../redux/birds/birds.action";

const CustomButton = () => {
  const dispatch = useDispatch();
  const level = useSelector(selectLevel);
  const answered = useSelector(selectAnswered);

  const handleGoNextLevel = () => {
    if (answered) {
      dispatch(increaseScore(5));
      dispatch(increaseLevel());
      dispatch(chooseCurrentList(null));
      dispatch(cleanBirdInfo());
      dispatch(changeNameList(level));
      dispatch(changeAudioList(level));
      dispatch(resetAnser());
      dispatch(goNextLevelStart());
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
