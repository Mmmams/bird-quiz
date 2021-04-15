import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Question from "./components/qustion/question.component";
import CustomButton from "./components/custom-button/custom-button.component";
import EndGame from "./components/endgame/endgame.component";
import Login from "./components/login/login";

import {
  currentBirdsArray,
  getRandomValue,
  fillColorsArrayFucntion,
} from "./utils.js";

import { loginSuccess, getLevelStart } from "./redux/user/user.actions";

import { selectCurrentUser, selectLevel } from "./redux/user/user.selector";

import {
  fetchInfoStart,
  setCurrentBirdArray,
  setRandomValue,
  fillColorsArray,
} from "./redux/birds/birds.action";

import { selectBirdsArray } from "./redux/birds/birds.selector";

function App() {
  const dispatch = useDispatch();

  const maxLevel = 6;
  const currentUser = useSelector(selectCurrentUser);
  const level = useSelector(selectLevel);
  const initialBirdsArray = useSelector(selectBirdsArray);

  useEffect(() => {
    dispatch(fetchInfoStart());
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(loginSuccess(user));
  }, []);
  useEffect(() => {
    if (currentUser) {
      dispatch(getLevelStart(currentUser.email));
    }
  }, [currentUser]);

  useEffect(() => {
    if (initialBirdsArray) {
      const currentArray = currentBirdsArray(level, initialBirdsArray);
      const randomValue = getRandomValue(currentArray.length);
      const colorsArray = fillColorsArrayFucntion(currentArray);
      dispatch(fillColorsArray(colorsArray));
      dispatch(setCurrentBirdArray(currentArray));
      dispatch(setRandomValue(randomValue));
    }
  }, [initialBirdsArray]);

  return (
    <div className="App">
      {currentUser ? (
        <div>
          <Header />

          {level > maxLevel ? (
            <EndGame />
          ) : (
            <div>
              <Question />
              <Main />
              <CustomButton />
            </div>
          )}
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
