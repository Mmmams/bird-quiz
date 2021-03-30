import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchImageStart } from "./redux/birds/birds.action";

import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Question from "./components/qustion/question.component";
import CustomButton from "./components/custom-button/custom-button.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
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
