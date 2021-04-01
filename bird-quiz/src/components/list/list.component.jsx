import React from "react";

import "./list.styles.scss";

import {
  selectBirdsNames,
  selectRandom,
  selectCurrentBirdsInfo,
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
  let birdsInfo = useSelector(selectCurrentBirdsInfo);

  const handleChooseList = (event, index) => {
    if (random === index) {
      dispatch(recieveRightAnswer());
      event.currentTarget.childNodes[0].childNodes[0].attributes[5].nodeValue =
        "green";
    } else {
      event.currentTarget.childNodes[0].childNodes[0].attributes[5].nodeValue =
        "red";
    }
    dispatch(chooseCurrentList(index));
    dispatch(chooseCurrentTitle(index));
    dispatch(chooseCurrentAudio(index));
  };

  return (
    <div className="bird-list-container">
      {true ? (
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
                    fill="white"
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
