import React from "react";

import "./custom-button.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import {
  currentBirdsArray,
  getRandomValue,
  fillColorsArrayFucntion,
} from "../../utils";

import { selectCurrentUser, selectLevel } from "../../redux/user/user.selector";

import { updateLevelStart, setMessage } from "../../redux/user/user.actions";

import {
  setAnswered,
  setCurrentBirdArray,
  resetActiveBird,
  setRandomValue,
  fillColorsArray,
  resetExtraScore,
} from "../../redux/birds/birds.action";

import {
  selectAnswered,
  selectBirdsArray,
} from "../../redux/birds/birds.selector";

const CustomButton = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const answered = useSelector(selectAnswered);
  const level = useSelector(selectLevel);
  const initialArray = useSelector(selectBirdsArray);

  const handleButton = () => {
    if (answered === true) {
      dispatch(setAnswered());
      dispatch(resetActiveBird());
      dispatch(resetExtraScore());
      dispatch(updateLevelStart({ email: user.email }));
      const currentArray = currentBirdsArray(level + 1, initialArray);
      dispatch(setCurrentBirdArray(currentArray));
      const randomValue = getRandomValue(currentArray.length);
      dispatch(setRandomValue(randomValue));
      const colorsArray = fillColorsArrayFucntion(currentArray);
      dispatch(fillColorsArray(colorsArray));
      dispatch(setMessage(null));
      localStorage.setItem("user", JSON.stringify(user));
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
