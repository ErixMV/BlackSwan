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
import { BurgerMenu } from './components/Navbar/Menu';
import { Loader } from './components/Loader/index';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Media from 'react-media';


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
    rendered ? (
      <Router>
        <div id="outer-container">
          <Media query="(max-width:600px)" render={() => (<BurgerMenu />)} />
          <div className="App" id="page-wrap">
            <Header />
            <Media query="(min-width:601px)" render={() => (<Navbar />)} />
            <Switch>
              <Route path="/recomendation" component={Recomendation} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    ) : (
      <Loader />
    )
  );
}

export default App;
