import React from "react";
import { Bar } from "./bar";
export class Bars extends React.Component {
  findFruitArray = fruitData => {
    const fruitPopularity = {};
    const fruitArray = [];
    fruitData.forEach(el => {
      if (fruitPopularity[el.favoriteFruit] === undefined) {
        fruitPopularity[el.favoriteFruit] = 0;
      } else {
        fruitPopularity[el.favoriteFruit] += 1;
      }
    });
    for (let fruit in fruitPopularity) {
      fruitArray.push({ fruit: fruit, popularity: fruitPopularity[fruit] });
    }
    fruitArray.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    return fruitArray;
  };
  findFruitTotal = fruitArray => {
    let fruitTotal = 0;
    fruitArray.forEach(fruit => {
      fruitTotal += fruit.popularity;
    });
    return fruitTotal;
  };
  render() {
    const { fruitData, selectedFruit, dispatch } = this.props;
    const fruitArray = this.findFruitArray(fruitData);
    const fruitTotal = this.findFruitTotal(fruitArray);

    return (
      <div className="App-Bars">
        {fruitArray.map(fruit => {
          return (
            <div
              className="bar-row"
              style={{ background: fruit.fruit === selectedFruit ? "#FFFF00" : "" }}
            >
              <div className="bar-fruit">{fruit.fruit}</div>
              <Bar
                fruit={fruit.fruit}
                fruitTotal={fruitTotal}
                fruitPopularity={fruit.popularity}
                dispatch={dispatch}
                selectedFruit={selectedFruit}
              />
              <div className="bar-popularity">{fruit.popularity}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
