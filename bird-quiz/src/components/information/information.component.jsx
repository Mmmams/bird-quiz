import "./information.styles.scss";

import { selectCurrentBirdsInfo } from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const BirdInfo = () => {
  const currentInfo = useSelector(selectCurrentBirdsInfo);
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

            <div className="title">
              <span>title</span>
              <span>{currentInfo.photos.photo[0].title}</span>
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
