import "./App.css";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
