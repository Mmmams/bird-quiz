import React from "react";

import "./list.styles.scss";

import { selectBirdsNames } from "../../redux/birds/birds.selector";
import {
  chooseCurrentList,
  chooseCurrentTitle,
} from "../../redux/birds/birds.action";

import { useDispatch, useSelector } from "react-redux";

const BirdsList = () => {
  const dispatch = useDispatch();
  const birds = useSelector(selectBirdsNames);

  const handleChooseList = (index) => {
    dispatch(chooseCurrentList(index));
    dispatch(chooseCurrentTitle(index));
  };

  return (
    <div className="bird-list-container">
      <ul className="bird-list">
        {birds.map((name, index) => (
          <li
            className="list"
            key={index}
            onClick={() => handleChooseList(index)}
          >
            <svg className="options_block--color" width="14" height="14">
              <circle
                cx="7"
                cy="7"
                r="6"
                stroke="black"
                strokeWidth="1"
                fill="white"
              ></circle>
            </svg>
            <span>{name[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirdsList;
