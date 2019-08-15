import React from "react";

export class List extends React.Component {
  render() {
    const { fruitData, selectedFruit } = this.props;
    return (
      <div className="App-List">
        {fruitData.map(element => {
          if (selectedFruit) {
            if (element.favoriteFruit !== selectedFruit) return null;
          }
          return (
            <div>
              <div className="list-line">
                <div className="list-name">{element.name}</div>
                <div className="list-fruit">{element.favoriteFruit}</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
