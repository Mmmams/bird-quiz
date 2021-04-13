import "./information.styles.scss";

import { useSelector } from "react-redux";

import { selectActiveBird } from "../../redux/birds/birds.selector";

const BirdInfo = () => {
  const activeBird = useSelector(selectActiveBird);

  return (
    <div className="container">
      {activeBird ? (
        <div>
          <div className="bird-info">
            <img className="bird-img" alt="bird" src={activeBird.image} />

            <div className="title-container">
              <div className="title">{activeBird.name}</div>
              <div className="engName">{activeBird.species}</div>
              <div className="sub-title">{activeBird.description}</div>
            </div>
          </div>
          <audio controls className="bird-audio" src={activeBird.audio}></audio>
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
