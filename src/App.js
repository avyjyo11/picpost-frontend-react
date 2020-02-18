import React from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "./pages/Main";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import "./styles/App.css";

//PrivateRoute is HOC style1
// const withAuth = function(Component) {
//   return function({ path, isLoggedIn, ...rest }) {
//     return (
//       <Route
//         path={path}
//         render={props =>
//           isLoggedIn === true ? (
//             <Component {...rest} {...props} />
//           ) : (
//             <Redirect to="/login" />
//           )
//         }
//       />
//     );
//   };
// };

// const PrivateRoute = withAuth(Main);

//PrivateRoute2 is HOC style2
const PrivateRoute2 = ({ path, component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      path={path}
      render={props =>
        isLoggedIn === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem("token") ? true : false
  };

  render() {
    return (
      <div>
        {/* <PrivateRoute path="/home" isLoggedIn={this.state.isLoggedIn} /> */}
        <PrivateRoute2
          path="/home"
          component={Main}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Route
          exact
          path="/"
          render={() =>
            this.state.isLoggedIn ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/login" render={props => <LoginForm {...props} />} />
        <Route path="/register" component={RegisterForm} />
      </div>
    );
  }
}

export default App;
