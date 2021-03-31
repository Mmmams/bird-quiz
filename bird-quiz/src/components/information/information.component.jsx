import "./information.styles.scss";

import {
  selectCurrentBirdsInfo,
  selectTitle,
} from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const BirdInfo = () => {
  const currentInfo = useSelector(selectCurrentBirdsInfo);
  const title = useSelector(selectTitle);
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
              <div className="sub-title">{title[1]}</div>
            </div>
          </div>
          <audio controls className="bird-audio"></audio>
        </div>
      ) : (
        <div className="bird-info">Listen audio</div>
      )}
    </div>
  );
};

export default BirdInfo;
