import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onDelete, onIncrement, onReset, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}    // instead of sending individual details of counter we can send counter itself like below
            counter={counter}
            /*selected={true}*/
          >
            <h1>Title</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
