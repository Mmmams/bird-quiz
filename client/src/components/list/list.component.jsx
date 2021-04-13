import "./list.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import right from "../../assets/true.mp3";
import wrong from "../../assets/wrong.mp3";
import { useEffect } from "react";

import { setActiveBird, setAnswered } from "../../redux/birds/birds.action";

import {
  selectCurrentBirdsArray,
  selectAnswered,
  selectRandom,
} from "../../redux/birds/birds.selector";

const BirdsList = () => {
  const dispatch = useDispatch();

  const random = useSelector(selectRandom);
  const answered = useSelector(selectAnswered);
  const currentArray = useSelector(selectCurrentBirdsArray);

  const handleChooseList = (event, index) => {
    dispatch(setActiveBird(currentArray[index]));
    if (index === random) {
      if (answered === false) {
        dispatch(setAnswered());
      }
    } else {
      console.log("wrong");
    }
  };

  return (
    <div className="bird-list-container">
      {currentArray ? (
        <div>
          <ul className="bird-list">
            {currentArray.map((bird, index) => (
              <li
                className="list"
                key={bird._id}
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
                <span>{bird.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bird-list-container loading-title">Загрузка...</div>
      )}
    </div>
  );
};

export default BirdsList;
