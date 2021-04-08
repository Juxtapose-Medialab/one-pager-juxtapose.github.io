import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/about" component={ About }></Route>
        </Switch>
    </Router>
  );
}

export default App;
