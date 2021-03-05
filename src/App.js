import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/about"></Route>
        </Switch>
    </Router>
  );
}

export default App;
