import React from "react";

import "./header.styles.scss";

import { selectScore, selectLevel } from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const Header = () => {
  const score = useSelector(selectScore);
  const level = useSelector(selectLevel);
  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">
          Song<span className="logo-part">Bird</span>
        </div>
        <div className="score">Баллы: {score}</div>
      </div>
      <ul className="header-list">
        <li className={`${level === 0 ? "currentLevel" : ""}  list`}>
          Разминка
        </li>
        <li className={`${level === 1 ? "currentLevel" : ""}  list`}>
          Воробьиные
        </li>
        <li className={`${level === 2 ? "currentLevel" : ""}  list`}>
          Лесные птицы
        </li>
        <li className={`${level === 3 ? "currentLevel" : ""}  list`}>
          Певчие птицы
        </li>
        <li className={`${level === 4 ? "currentLevel" : ""}  list`}>
          Хищные птицы
        </li>
        <li className={`${level === 5 ? "currentLevel" : ""}  list`}>
          Морские птицы
        </li>
      </ul>
    </div>
  );
};

export default Header;
