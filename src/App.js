import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import MyWork from "./Components/MyWork";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/mywork">
          <MyWork />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
