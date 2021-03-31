import React from "react";

import "./header.styles.scss";

import { selectScore } from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const Header = () => {
  const score = useSelector(selectScore);
  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">
          Song<span className="logo-part">Bird</span>
        </div>
        <div className="score">Баллы: {score}</div>
      </div>
      <ul className="header-list">
        <li className="list">Разминка</li>
        <li className="list">Воробьиные</li>
        <li className="list">Лесные птицы</li>
        <li className="list">Певчие птицы</li>
        <li className="list">Хищные птицы</li>
        <li className="list">Морские птицы</li>
      </ul>
    </div>
  );
};

export default Header;
