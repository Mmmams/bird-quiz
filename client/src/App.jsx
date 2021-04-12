import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchImageStart } from "./redux/birds/birds.action";
import { selectEndGame } from "./redux/birds/birds.selector";

import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Question from "./components/qustion/question.component";
import CustomButton from "./components/custom-button/custom-button.component";
import EndGame from "./components/endgame/endgame.component";

function App() {
  const endGame = useSelector(selectEndGame);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageStart());
  }, []);
  return (
    <div className="App">
      <Header />

      {endGame ? (
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
