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
