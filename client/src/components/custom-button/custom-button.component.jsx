import React from "react";

import "./custom-button.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { currentBirdsArray, getRandomValue } from "../../utils";

import {
  increaseScore,
  increaseLevel,
  setAnswered,
  setCurrentBirdArray,
  resetActiveBird,
  setRandomValue,
} from "../../redux/birds/birds.action";

import {
  selectAnswered,
  selectExtraScore,
  selectLevel,
  selectBirdsArray,
} from "../../redux/birds/birds.selector";

const CustomButton = () => {
  const dispatch = useDispatch();

  const answered = useSelector(selectAnswered);
  const level = useSelector(selectLevel);
  const initialArray = useSelector(selectBirdsArray);
  const extraScore = useSelector(selectExtraScore);

  const handleButton = () => {
    if (answered === true) {
      dispatch(increaseLevel());
      dispatch(increaseScore(extraScore));
      dispatch(setAnswered());
      dispatch(resetActiveBird());
      const currentArray = currentBirdsArray(level + 1, initialArray);
      dispatch(setCurrentBirdArray(currentArray));
      const randomValue = getRandomValue(currentArray.length);
      dispatch(setRandomValue(randomValue));
    }
  };

  return (
    <div>
      <button
        className={answered ? "custom-button" : "blockedBtn"}
        onClick={() => {
          handleButton();
        }}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default CustomButton;
