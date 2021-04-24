import logo from './logo.svg';
import './App.css';
import User from './Component/User/User';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import DetailInfo from './Component/DetailInfo/DetailInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:userId">
          <DetailInfo></DetailInfo>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
