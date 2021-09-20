import React, { Component } from "react";
import Subject from "./components/Subject";
import Nav from "./components/Nav";
import Desc from "./components/Desc";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "SE4920", sub: "Senior Project" },
      contents: [
        {
          id: 1,
          title: "Commerce Bank Project",
          desc: "Hotel Cubicle Reservation",
        },
        {
          id: 2,
          title: "Federal Reserve Bank",
          desc: "Hotel Cubicle Reservation",
        },
        { id: 3, title: "Game project", desc: "World of war Craft" },
      ],
    };
  }

  render() {
    return (
      <div className="Name">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}>
          {" "}
        </Subject>

        <Nav data={this.state.contents}></Nav>

        <Desc></Desc>
      </div>
    );
  }
}

export default App;
