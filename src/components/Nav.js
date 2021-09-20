import React, { Component } from "react";

class Nav extends Component {
  render() {
    var data = this.props.data;
    var lists = [];
    var i = 0;

    while (i < data.length) {
      lists.push(
        <li>
          <a href={data[i].id + ".html"}> {data[i].title} </a>{" "}
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default Nav;
