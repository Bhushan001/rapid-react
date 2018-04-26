import * as React from "react";
import Pages from "./Pages/Pages";
import "./ProjectManager.css";
import Projects from "./Projects/Projects";
import Workspaces from "./Workspaces/Workspaces";

class ProjectManager extends React.Component {
  public render() {
    return (
      <div className="ProjectManager">
        <div className="row">
          <div className="offset-md-1 col-md-4 col-sm-12">
            <Workspaces />
          </div>
          <div className="offset-md-1 col-md-4 col-sm-12">
            <Projects />
          </div>
          <div className="offset-md-1 col-md-4 col-sm-12">
            <Pages />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectManager;
