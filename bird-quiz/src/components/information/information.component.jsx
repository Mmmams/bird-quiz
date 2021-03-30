import React, { useEffect } from "react";

import "./information.styles.scss";

import { selectCurrentBirdsInfo } from "../../redux/birds/birds.selector";
import { useSelector } from "react-redux";

const BirdInfo = () => {
  const currentInfo = useSelector(selectCurrentBirdsInfo);
  return (
    <div className="bird-info">
      {currentInfo ? (
        <div>
          <div className="bird-info-title">
            <img
              className="bird-img"
              alt="bird"
              src={currentInfo.photos.photo[0].url_m}
            />
          </div>
          <div className="title">{currentInfo.photos.photo[0].title}</div>
          <audio controls className="bird-audio"></audio>
          <div className="discription">
            Some text Some text Some text Some text Some text Some text Some
            text Some text
          </div>
        </div>
      ) : (
        <span>Listen audio</span>
      )}
    </div>
  );
};

export default BirdInfo;
