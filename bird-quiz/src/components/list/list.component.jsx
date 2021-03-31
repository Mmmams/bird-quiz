import React from "react";

import "./list.styles.scss";

import {
  selectBirdsNames,
  selectRandom,
} from "../../redux/birds/birds.selector";
import {
  chooseCurrentList,
  chooseCurrentTitle,
  chooseCurrentAudio,
  recieveRightAnswer,
} from "../../redux/birds/birds.action";

import { useDispatch, useSelector } from "react-redux";

const BirdsList = () => {
  const dispatch = useDispatch();
  const birds = useSelector(selectBirdsNames);
  const random = useSelector(selectRandom);

  const handleChooseList = (index) => {
    if (random === index) {
      dispatch(recieveRightAnswer());
      alert("right answer");
    } else {
      alert("wrong answer");
    }
    dispatch(chooseCurrentList(index));
    dispatch(chooseCurrentTitle(index));
    dispatch(chooseCurrentAudio(index));
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
            <svg className="options_block" width="14" height="14">
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
