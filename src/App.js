import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

import "./styles/App.css";

// function withHeaderFooter(Component) {
//   return function(props) {
//     return (
//       <div className="App">
//         <Header />
//         <Main {...props} />
//       </div>
//     );
//   };
// }

// function withAuth(Component) {
//   return function({ path, isLoggedIn, ...props }) {
//     return isLoggedIn === true ? (
//       <Router path={path} render={props => <Component {...props} />} />
//     ) : (
//       <Redirect to="/login" />
//     );
//   };
// }

//const ProtectedMain = withAuth(withHeaderFooter(Main));

const PrivateRoute = ({ path, component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      path={path}
      render={props =>
        isLoggedIn === true ? (
          <Component {...rest} {...props} />
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
      <Router>
        <div>
          <PrivateRoute
            path="/home"
            isLoggedIn={this.state.isLoggedIn}
            component={Main}
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
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
