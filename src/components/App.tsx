import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import profilePage from "../pages/ProfilePage";
import projectPage from "../pages/ProjectPage";
import projectInfoPage from "../pages/ProjectInfoPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/profile" component={profilePage} />
        <Route exact path="/project" component={projectPage} />
        <Route exact path="/project/memory.log" component={projectInfoPage} />
        <Route exact path="/project/ida" component={projectInfoPage} />
        <Route exact path="/project/iport" component={projectInfoPage} />
        <Route exact path="/project/fdt" component={projectInfoPage} />
        <Route exact path="/project/eight" component={projectInfoPage} />
      </Switch>
    </div>
  );
};

export default App;
