import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">
          Song<span className="logo-part">Bird</span>
        </div>
        <div className="score">Баллы:</div>
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
