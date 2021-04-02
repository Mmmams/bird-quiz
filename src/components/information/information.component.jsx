import "./information.styles.scss";

import {
  selectAudio,
  selectCurrentBirdsInfo,
  selectTitle,
  selectAnswered,
} from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const BirdInfo = () => {
  const currentInfo = useSelector(selectCurrentBirdsInfo);
  const audio = useSelector(selectAudio);
  const title = useSelector(selectTitle);
  const answered = useSelector(selectAnswered);

  return (
    <div className="container">
      {currentInfo ? (
        <div>
          <div className="bird-info">
            <img
              className="bird-img"
              alt="bird"
              src={currentInfo.photos.photo[0].url_m}
            />

            <div className="title-container">
              <div className="title">{title[0]}</div>
              <div className="engName">{title[3]}</div>
              <div className="sub-title">{title[1]}</div>
            </div>
          </div>
          <audio controls className="bird-audio" src={audio}></audio>
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
