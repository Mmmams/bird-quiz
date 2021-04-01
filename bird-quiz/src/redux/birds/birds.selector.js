import { createSelector } from "reselect";

const selectBirds = (state) => state.birds;

export const selectCurrentBirdsInfo = createSelector(
  [selectBirds],
  (birds) => birds.currentInfo
);

export const selectBirdsNames = createSelector(
  [selectBirds],
  (birds) => birds.currentName
);

export const selectLevel = createSelector(
  [selectBirds],
  (birds) => birds.level
);

export const selectScore = createSelector(
  [selectBirds],
  (birds) => birds.score
);

export const selectTitle = createSelector(
  [selectBirds],
  (birds) => birds.currentTitle
);

export const selectAudio = createSelector(
  [selectBirds],
  (birds) => birds.currentAudio
);

export const selectAudioList = createSelector(
  [selectBirds],
  (birds) => birds.currentAudioList
);

export const selectRandom = createSelector(
  [selectBirds],
  (birds) => birds.random
);

export const selectAnswered = createSelector(
  [selectBirds],
  (birds) => birds.answered
);

export const selectBirdsInfo = createSelector(
  [selectBirds],
  (birds) => birds.birdsInfo
);

export const selecrExtraScore = createSelector(
  [selectBirds],
  (birds) => birds.extraScore
);

export const selectEndGame = createSelector(
  [selectBirds],
  (birds) => birds.endGame
);
