import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProjectManager from "./components/ProjectManager/ProjectManager";
import { Exporter } from "./data/exporter";
import { IAppState } from './interfaces';
class App extends React.Component<any,IAppState> {
  public exporter: Exporter;
  constructor(props: any) {
    super(props);
    this.exporter = new Exporter();
    this.state={
      data:this.exporter.getDataSet()
    }
  }
  public render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <h1>Rapid Designer - React Version</h1>
          <ProjectManager workspaces={this.state.data.workspaces} />
        </div>
      </div>
    );
  }
}

export default App;
