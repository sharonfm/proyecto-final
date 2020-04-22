import React, { useContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import UserProvider, {UserContext} from './context/authContext';


const loading = () => <div className="animated fadeIn pt-3 text-center">Cargando...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));

const App =()=> {
  const user = useContext(UserContext);
  return (
    <UserProvider>
      <HashRouter>
        <React.Suspense fallback={loading()}>
          {user ?
            <Switch>
              <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
            </Switch>
            :
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props} />} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            </Switch>
          }       
        </React.Suspense>
      </HashRouter>
    </UserProvider>
  );
}

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
