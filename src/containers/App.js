import { connect } from "react-redux";
import { App } from "../App";

const mapStateToProps = state => {
  const Fruit = state.fruitsReducer;
  return {
    fruitData: Fruit.get("fruitData"),
    selectedFruit: Fruit.get("selectedFruit")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
