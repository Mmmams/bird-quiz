import React from "react";

import "./endgame.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import {
  getRandomValue,
  currentBirdsArray,
  fillColorsArrayFucntion,
} from "../../utils";

import { selectCurrentUser, selectScore } from "../../redux/user/user.selector";

import {
  resetLevelStart,
  resetScoreStart,
} from "../../redux/user/user.actions.js";

import {
  resetGame,
  setRandomValue,
  setCurrentBirdArray,
  fillColorsArray,
} from "../../redux/birds/birds.action";

import { selectBirdsArray } from "../../redux/birds/birds.selector";

const EndGame = () => {
  const dispatch = useDispatch();

  const score = useSelector(selectScore);
  const user = useSelector(selectCurrentUser);
  const initialArray = useSelector(selectBirdsArray);
  const maxScore = 30;

  const handleEndGame = () => {
    dispatch(resetGame());
    const currentArray = currentBirdsArray(1, initialArray);
    dispatch(setCurrentBirdArray(currentArray));

    const colorsArray = fillColorsArrayFucntion(currentArray);
    dispatch(fillColorsArray(colorsArray));

    const randomValue = getRandomValue(currentArray.length);
    dispatch(setRandomValue(randomValue));

    dispatch(resetLevelStart(user.email));
    dispatch(resetScoreStart(user.email));
  };

  return (
    <div className="endgame-container">
      <div className="endgame-title">Поздравляем</div>
      <div className="endgame-subtitle">
        Игра окончена. Общий результат {score} из 30 возможных баллов.
      </div>
      {score === maxScore ? (
        <div className="endgame-subtitle">Поздравляем, Вы прошли игру.</div>
      ) : (
        <button className="endgame-btn" onClick={() => handleEndGame()}>
          Попробовать еще раз!
        </button>
      )}
    </div>
  );
};

export default EndGame;
