import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleMovie from "./pages/SingleMovie";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SingleMovie" component={SingleMovie} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
