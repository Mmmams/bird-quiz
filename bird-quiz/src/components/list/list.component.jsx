import React from "react";

import "./list.styles.scss";

import {
  selectBirdsNames,
  selectRandom,
  selecrExtraScore,
  selectBirdsInfo,
} from "../../redux/birds/birds.selector";
import {
  chooseCurrentList,
  chooseCurrentTitle,
  chooseCurrentAudio,
  recieveRightAnswer,
  decreaseExtraScore,
  increaseScore,
} from "../../redux/birds/birds.action";

import { useDispatch, useSelector } from "react-redux";

const BirdsList = () => {
  const dispatch = useDispatch();
  const birds = useSelector(selectBirdsNames);
  const random = useSelector(selectRandom);
  const birdsInfo = useSelector(selectBirdsInfo);
  const extraScore = useSelector(selecrExtraScore);
  const handleChooseList = (event, index) => {
    if (random === index) {
      birds[index][2] = "green";
      dispatch(recieveRightAnswer());
      dispatch(increaseScore(extraScore));
    } else {
      if (birds[index][2] !== "red") {
        dispatch(decreaseExtraScore());
      }
      birds[index][2] = "red";
    }
    dispatch(chooseCurrentList(index));
    dispatch(chooseCurrentTitle(index));
    dispatch(chooseCurrentAudio(index));
  };
  return (
    <div className="bird-list-container">
      {birdsInfo.length ? (
        <div>
          <ul className="bird-list">
            {birds.map((name, index) => (
              <li
                className="list"
                key={index}
                onClick={(event) => handleChooseList(event, index)}
              >
                <svg className="options_block" width="14" height="14">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="black"
                    strokeWidth="1"
                    fill={name[2]}
                  ></circle>
                </svg>
                <span>{name[0]}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bird-list-container loading-title">LOADING...</div>
      )}
    </div>
  );
};

export default BirdsList;
