import React, { useContext } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import { UserContext } from "./context/authContext";

const pageLoading = () => (
  <div className="animated fadeIn pt-3 text-center">Cargando...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));

const App = () => {
  const { user, loading } = useContext(UserContext);
  return (
    <HashRouter>
      <React.Suspense fallback={pageLoading()}>
        {loading ? (
          <div>
            loading
          </div>
        ) :
          user ? (
            <Switch>
              <Route
                path="/"
                name="Home"
                render={(props) => <DefaultLayout {...props} />}
              />
            </Switch>
          ) : (
              <Switch>
                <Route
                  exact
                  path="/"
                  name="Login Page"
                  render={(props) => <Login {...props} />}
                />
                <Route
                  exact
                  path="/register"
                  name="Register Page"
                  render={(props) => <Register {...props} />}
                />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            )
        }

      </React.Suspense>
    </HashRouter>
  );
};

// const user = null;
//   return (
//         user ?
//         <ProfilePage />
//       :
//         <Router>
//           <SignUp path="signUp" />
//           <SignIn path="/" />
//           <PasswordReset path = "passwordReset" />
//         </Router>

//   );

export default App;