import "./index.css";
import CallApi from "./components/HomePage";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Amazing Favorite American Sports App</h1>
        {/*  <CallApi />
        <Details /> */}

        <Route path="/" exact component={CallApi} />
        <Route path="/details/" component={Details} />
      </div>
    </Router>
  );
}

export default App;
