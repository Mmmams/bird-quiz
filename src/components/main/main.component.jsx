import React from "react";

import "./main.styles.scss";

import BirdList from "../list/list.component";
import BirdInfo from "../information/information.component";

const Main = () => {
  return (
    <div className="main">
      <BirdList />
      <BirdInfo />
    </div>
  );
};

export default Main;
