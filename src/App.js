import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} exact component={About} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
