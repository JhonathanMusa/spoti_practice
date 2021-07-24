import "./App.css";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
