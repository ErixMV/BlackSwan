import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recomendation from "./components/Recomendation";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/recomendation" component={Recomendation} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
