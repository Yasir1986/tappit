import "./index.css";
import CallApi from "./components/HomePage";
import Details from "./components/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <h1>My Amazing Favorite American Sports App</h1>
        {/*  <CallApi />
        <Details /> */}
        <Route path="/" exact component={CallApi} />
        <Route path="/person/1"  component={Details} />
      </div>
    </Router>
  );
}

export default App;
