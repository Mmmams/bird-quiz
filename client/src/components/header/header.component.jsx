import React from "react";

import "./header.styles.scss";

import { useSelector } from "react-redux";

import { selectLevel, selectScore } from "../../redux/birds/birds.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = () => {
  const level = useSelector(selectLevel);
  const score = useSelector(selectScore);
  const user = useSelector(selectCurrentUser);
  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">
          Song<span className="logo-part">Bird</span>
        </div>
        <div className="score">
          <span style={{ color: "#2399fa", fontSize: "19px" }}>
            {user.email}
          </span>{" "}
          Баллы: {score}
        </div>
      </div>
      <ul className="header-list">
        <li className={`${level === 1 ? "currentLevel" : ""}  list`}>
          Разминка
        </li>
        <li className={`${level === 2 ? "currentLevel" : ""}  list`}>
          Воробьиные
        </li>
        <li className={`${level === 3 ? "currentLevel" : ""}  list`}>
          Лесные птицы
        </li>
        <li className={`${level === 4 ? "currentLevel" : ""}  list`}>
          Певчие птицы
        </li>
        <li className={`${level === 5 ? "currentLevel" : ""}  list`}>
          Хищные птицы
        </li>
        <li className={`${level === 6 ? "currentLevel" : ""}  list`}>
          Морские птицы
        </li>
      </ul>
    </div>
  );
};

export default Header;
