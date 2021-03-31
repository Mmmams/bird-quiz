import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchImageStart, getRandom } from "./redux/birds/birds.action";
import { selectBirdsNames } from "./redux/birds/birds.selector";
import { getRandomValue } from "./utils";

import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Question from "./components/qustion/question.component";
import CustomButton from "./components/custom-button/custom-button.component";

function App() {
  const birdsLength = useSelector(selectBirdsNames);
  const dispatch = useDispatch();
  useEffect(() => {
    const randomValue = getRandomValue(birdsLength);
    dispatch(getRandom(randomValue));
    dispatch(fetchImageStart());
  }, []);
  return (
    <div className="App">
      <Header />
      <Question />
      <Main />
      <CustomButton />
    </div>
  );
}

export default App;
