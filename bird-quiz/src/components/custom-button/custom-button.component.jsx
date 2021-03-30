import React from "react";

import "./custom-button.styles.scss";

import { selectLevel } from "../../redux/birds/birds.selector";
import { useDispatch, useSelector } from "react-redux";
import { goNextLevelStart } from "../../redux/birds/birds.action";

const CustomButton = () => {
  const dispatch = useDispatch();
  const level = useSelector(selectLevel);

  const handleGoNextLevel = () => {
    dispatch(goNextLevelStart());
  };

  return (
    <div>
      <button
        className="custom-button"
        onClick={() => {
          handleGoNextLevel();
        }}
      >
        Следующий уровень
      </button>
    </div>
  );
};

export default CustomButton;
