import { createSelector } from "reselect";

const selectBirds = (state) => state.birds;

export const selectBirdsArray = createSelector(
  [selectBirds],
  (birds) => birds.birdsArray
);

export const selectCurrentBirdsArray = createSelector(
  [selectBirds],
  (birds) => birds.currentBirdsArray
);

export const selectLevel = createSelector(
  [selectBirds],
  (birds) => birds.level
);

export const selectScore = createSelector(
  [selectBirds],
  (birds) => birds.score
);

export const selectExtraScore = createSelector(
  [selectBirds],
  (birds) => birds.extraScore
);

export const selectRandom = createSelector(
  [selectBirds],
  (birds) => birds.random
);

export const selectAnswered = createSelector(
  [selectBirds],
  (birds) => birds.answered
);

export const selectEndGame = createSelector(
  [selectBirds],
  (birds) => birds.endGame
);

export const selectActiveBird = createSelector(
  [selectBirds],
  (birds) => birds.activeBird
);

export const selectQuestionBird = createSelector(
  [selectBirds],
  (birds) => birds.questionBird
);
