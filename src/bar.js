import React from "react";
import { pickFruit } from "./actions/fruitActions";

export class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: this.getRandomColor()
    };
  }
  selectFruit = fruit => {
    this.props.dispatch(pickFruit(fruit));
    console.log(`Fruit selected: ${fruit}, ${this.props.fruitPopularity}`);
  };
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  render() {
    const { fruitTotal, fruitPopularity, fruit, selectedFruit } = this.props;
    const barPercentage = Math.round((fruitPopularity * 100) / fruitTotal);

    const barStyle = {
      outterBarStyle: {
        width: `${barPercentage}%`,
        height: "100%"
      },
      innerBarStyle: {
        background: this.state.background,
        height: "100%"
      }
    };

    return (
      <div className="bar-bar" onClick={() => this.selectFruit(fruit)}>
        <div style={barStyle.outterBarStyle}>
          <div className="colored-bar" style={barStyle.innerBarStyle} />
        </div>
      </div>
    );
  }
}
