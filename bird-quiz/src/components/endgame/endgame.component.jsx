import React from "react";

import "./endgame.styles.scss";
import { selectScore } from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const EndGame = () => {
  const score = useSelector(selectScore);
  return (
    <div className="endgame-container">
      <div className="endgame-title">Поздравляем</div>
      <div className="endgame-subtitle">
        Игра окончена. Общий результат {score} из 30 возможных баллов.
      </div>
      <button className="endgame-btn">Попробовать еще раз!</button>
    </div>
  );
};

export default EndGame;
