import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectMessage = createSelector(
  [selectUser],
  (user) => user.message
);

export const selectScore = createSelector([selectUser], (user) => user.score);

export const selectLevel = createSelector([selectUser], (user) => user.level);
