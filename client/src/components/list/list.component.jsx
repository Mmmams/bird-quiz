import "./list.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import right from "../../assets/true.mp3";
import wrong from "../../assets/wrong.mp3";
import { useEffect } from "react";

const BirdsList = () => {
  const random = 1;
  const answered = true;

  const handleChooseList = (event, index) => {};

  return (
    <div className="bird-list-container">
      {1 ? (
        <div>
          <ul className="bird-list">
            {[].map((name, index) => (
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
                <span>name</span>
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
