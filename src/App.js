import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './pages/About';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/about" component={ About }></Route>
        </Switch>
    </Router>
  );
}

export default App;
