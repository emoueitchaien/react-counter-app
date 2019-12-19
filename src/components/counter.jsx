import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3", "tag4"]
  //   // image: "https://picsum.photos/300" //random image nikaalxa yasle
  // };

  // styles = {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // };

  // renderTags() {
  //   if (this.state.tags.length === 1) return <p>There are no tags!</p>;

  //   return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  // }

  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  // handleIncrement = () => {
  //   // console.log("Increment Clicked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  render() {
    // console.log("props", this.props);

    console.log("Counter - Rendered");

    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.check()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment!
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.renderTags()} */}
        {/* <img src={this.state.image} /> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  check() {
    const { value } = this.props.counter; //destructing assignment
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
