import { createAction } from "redux-act";
export const loadFruitData = createAction("FRUIT_DATA");
export const selectFruit = createAction("SELECT_FRUIT");
export function loadData(param) {
  return async dispatch => {
    dispatch(loadFruitData(param));
  };
}
export function pickFruit(param) {
  return async dispatch => {
    dispatch(selectFruit(param));
  };
}
