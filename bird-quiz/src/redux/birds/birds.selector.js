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
