import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import Watch from "./pages/Watch/Watch";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext"

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {user ? <Homepage /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register" exact>
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login" exact>
        {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies" exact>
              <Homepage type="movies" />
            </Route>
            <Route path="/series" exact>
              <Homepage type="series" />
            </Route>
            <Route path="/watch" exact>
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
