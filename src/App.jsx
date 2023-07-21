import Home  from "./pages/Home";
import About from "./pages/About";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
