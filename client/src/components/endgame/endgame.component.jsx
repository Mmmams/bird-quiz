import React from "react";

import "./endgame.styles.scss";

import { useDispatch, useSelector } from "react-redux";

const EndGame = () => {
  const dispatch = useDispatch();

  const handleEndGame = () => {};

  return (
    <div className="endgame-container">
      <div className="endgame-title">Поздравляем</div>
      <div className="endgame-subtitle">
        Игра окончена. Общий результат из 24 возможных баллов.
      </div>
      {1 === 24 ? (
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
