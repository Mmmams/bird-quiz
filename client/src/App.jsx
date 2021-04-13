import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Question from "./components/qustion/question.component";
import CustomButton from "./components/custom-button/custom-button.component";
import EndGame from "./components/endgame/endgame.component";

import { currentBirdsArray, getRandomValue } from "./utils.js";

import {
  fetchInfoStart,
  setCurrentBirdArray,
  setRandomValue,
} from "./redux/birds/birds.action";

import { selectLevel, selectBirdsArray } from "./redux/birds/birds.selector";

function App() {
  const dispatch = useDispatch();

  const level = useSelector(selectLevel);
  const initialBirdsArray = useSelector(selectBirdsArray);

  useEffect(() => {
    dispatch(fetchInfoStart());
  }, []);

  useEffect(() => {
    if (initialBirdsArray) {
      const currentArray = currentBirdsArray(level, initialBirdsArray);
      const randomValue = getRandomValue(currentArray.length);
      dispatch(setCurrentBirdArray(currentArray));
      dispatch(setRandomValue(randomValue));
    }
  }, [initialBirdsArray]);

  return (
    <div className="App">
      <Header />

      {false ? (
        <EndGame />
      ) : (
        <div>
          <Question />
          <Main />
          <CustomButton />
        </div>
      )}
    </div>
  );
}

export default App;
