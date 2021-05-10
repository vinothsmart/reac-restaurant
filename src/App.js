import logo from "./logo.svg";
import "./App.css";
import "./styles/Custom.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
