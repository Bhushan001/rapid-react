import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProjectManager from "./components/ProjectManager/ProjectManager";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container-fluid">
          <h1>Rapid Designer - React Version</h1>
          <ProjectManager />
        </div>
      </div>
    );
  }
}

export default App;
