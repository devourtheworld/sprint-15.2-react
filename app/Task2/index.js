import React, { Component } from "react";

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: "hidden text 1",
        },
        {
          id: 2,
          text: "hidden text 2",
        },
        {
          id: 3,
          text: "hidden text 3",
        },
      ],
      text: "",
    };
  }

  render() {
    return (
      <>
        {this.state.list.map((item) => {
          return (
            <span
              className="element"
              onMouseOver={() => {
                this.setState({ text: item.text });
              }}
              onMouseOut={() => {
                this.setState({ text: "" });
              }}
              key={item.id}
            >
              id - {item.id}
            </span>
          );
        })}
        <p className="text">{this.state.text}</p>
      </>
    );
  }
}