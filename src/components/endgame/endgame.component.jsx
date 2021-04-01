import React from "react";

import "./endgame.styles.scss";
import { selectScore } from "../../redux/birds/birds.selector";
import { useDispatch, useSelector } from "react-redux";
import { reestGame, fetchImageStart } from "../../redux/birds/birds.action";

const EndGame = () => {
  const dispatch = useDispatch();

  const handleEndGame = () => {
    dispatch(reestGame());
    dispatch(fetchImageStart());
  };

  const score = useSelector(selectScore);
  return (
    <div className="endgame-container">
      <div className="endgame-title">Поздравляем</div>
      <div className="endgame-subtitle">
        Игра окончена. Общий результат {score} из 30 возможных баллов.
      </div>
      <button className="endgame-btn" onClick={() => handleEndGame()}>
        Попробовать еще раз!
      </button>
    </div>
  );
};

export default EndGame;
