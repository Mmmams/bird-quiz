import "./information.styles.scss";

import { useSelector } from "react-redux";

const BirdInfo = () => {
  const title = "title";

  return (
    <div className="container">
      {1 ? (
        <div>
          <div className="bird-info">
            <img className="bird-img" alt="bird" src="" />

            <div className="title-container">
              <div className="title">{title}</div>
              <div className="engName">{title}</div>
              <div className="sub-title">{title}</div>
            </div>
          </div>
          <audio controls className="bird-audio" src=""></audio>
        </div>
      ) : (
        <div className="bird-info">
          Послушайте звук и выберите правильный ответ.
        </div>
      )}
    </div>
  );
};

export default BirdInfo;
