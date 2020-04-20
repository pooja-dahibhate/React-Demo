//******************ORIGINAL = Using props*********************** */
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

//******Not Using props = we can optimized use of props as below****************************
// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   render() {
//     const { onReset, counters, onDelete, onIncrement } = this.props;

//     return (
//       <div>
//         <button onClick={onReset} className="btn btn-primary btn-sm m-2">
//           Reset
//         </button>
//         {counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             counter={counter}
//           ></Counter>
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;
