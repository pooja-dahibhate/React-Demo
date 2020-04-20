import React, { Component } from "react";

//Stateless Functional Component = optimized the use of props
//We can use arrow funtion instaed of creating class, if there is no use of states
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

//********Stateless function (using props)******** */
//Stateless Functional Component
// const NavBar = (props) => {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   };

//   export default NavBar;

//****************************************************** */

//********Using class******** */
// import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

//****************************************************** */
