import "./list.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import right from "../../assets/true.mp3";
import wrong from "../../assets/wrong.mp3";

import { updateScoreStart } from "../../redux/user/user.actions.js";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
  setActiveBird,
  setAnswered,
  decreaseExtraScore,
  changeListColor,
} from "../../redux/birds/birds.action";

import {
  selectCurrentBirdsArray,
  selectAnswered,
  selectRandom,
  selectExtraScore,
  selectColorsArray,
} from "../../redux/birds/birds.selector";

const BirdsList = () => {
  const dispatch = useDispatch();

  const rightAnswerAudio = new Audio(right);
  const wrongAnswerAudio = new Audio(wrong);

  const currentUser = useSelector(selectCurrentUser);

  const colorsArray = useSelector(selectColorsArray);
  const random = useSelector(selectRandom);
  const answered = useSelector(selectAnswered);
  const currentArray = useSelector(selectCurrentBirdsArray);
  const extraScore = useSelector(selectExtraScore);

  const handleChooseList = (event, index) => {
    dispatch(setActiveBird(currentArray[index]));
    if (index === random) {
      if (answered === false) {
        rightAnswerAudio.play();
        dispatch(changeListColor("green", index));
        dispatch(updateScoreStart(currentUser.email, extraScore));
        dispatch(setAnswered());
      }
    } else {
      if (answered === false && colorsArray[index] !== "red") {
        wrongAnswerAudio.play();
        dispatch(decreaseExtraScore());
        dispatch(changeListColor("red", index));
      }
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
                    fill={colorsArray[index]}
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
