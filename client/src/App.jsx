import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./boxes.sass"
import "./mixins.sass"

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { About } from './components/About';
import { Home } from "./components/Home";
import { Recomendation } from "./components/Recomendation";
import { Footer } from "./components/Footer";

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [rendered, isRendered] = useState(false);

  const getTrainedMatrix = async () => {
    await axios.get("/api/train");
    isRendered(true)
  };

  useEffect(() => {
    getTrainedMatrix();
  }, []);

  return (
    rendered &&
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/recomendation" component={Recomendation} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
