import React from "react";
import "./App.css";
import { Bars } from "./bars";
import { List } from "./list";
import { loadData } from "./actions/fruitActions";

export class App extends React.Component {
  componentDidMount() {
    window.FruitasticApi.get(this.cb);
  }
  cb = response => {
    this.props.dispatch(loadData(response));
  };
  render() {
    const { fruitData, dispatch, selectedFruit } = this.props;
    console.log('testing')
    return (
      <div className="App">
        <header className="App-header">
          <h2>Favorite Fruits</h2>
        </header>
        <div className="App-Wrapper">
          <Bars fruitData={fruitData} dispatch={dispatch} selectedFruit={selectedFruit} />
          <List fruitData={fruitData} selectedFruit={selectedFruit} />
        </div>
      </div>
    );
  }
}

export default App;
