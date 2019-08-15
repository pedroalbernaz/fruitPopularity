import { fromJS } from "immutable";
import { createReducer } from "redux-act";

import { loadFruitData, selectFruit } from "../actions/fruitActions";
const initialState = fromJS({
  fruitData: {},
  selectedFruit: ""
});
const fruitsReducer = createReducer(
  {
    [loadFruitData]: (state, fruitData) => {
      return state.merge({ fruitData });
    },
    [selectFruit]: (state, selectedFruit) => {
      return state.merge({ selectedFruit });
    }
  },
  initialState
);
export default fruitsReducer;
