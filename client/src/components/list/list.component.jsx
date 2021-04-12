import "./list.styles.scss";
import {
  selectBirdsNames,
  selectRandom,
  selecrExtraScore,
  selectBirdsInfo,
  selectAnswered,
} from "../../redux/birds/birds.selector";
import {
  chooseCurrentList,
  chooseCurrentTitle,
  chooseCurrentAudio,
  recieveRightAnswer,
  decreaseExtraScore,
  increaseScore,
  changeColor,
} from "../../redux/birds/birds.action";

import { useDispatch, useSelector } from "react-redux";

import right from "../../assets/true.mp3";
import wrong from "../../assets/wrong.mp3";
import { useEffect } from "react";

const BirdsList = () => {
  const dispatch = useDispatch();
  const answered = useSelector(selectAnswered);
  const birds = useSelector(selectBirdsNames);
  const random = useSelector(selectRandom);
  const birdsInfo = useSelector(selectBirdsInfo);
  const extraScore = useSelector(selecrExtraScore);
  const rightAnswerAudio = new Audio(right);
  const wrongAnswerAudio = new Audio(wrong);

  useEffect(() => {
    if ((random || random === 0) && answered === false) {
      console.log("Правильный ответ: " + birds[random][0]);
    }
  }, [random]);

  const handleChooseList = (event, index) => {
    if (random === index) {
      if (answered === false) {
        dispatch(changeColor(index, "green"));
        rightAnswerAudio.play();
        dispatch(increaseScore(extraScore));
        dispatch(recieveRightAnswer());
      }
    } else {
      if (birds[index][2] !== "red" && answered === false) {
        dispatch(decreaseExtraScore());
        wrongAnswerAudio.play();
      }
      if (answered === false) {
        dispatch(changeColor(index, "red"));
      }
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
        <div className="bird-list-container loading-title">Загрузка...</div>
      )}
    </div>
  );
};

export default BirdsList;
