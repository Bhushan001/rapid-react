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
          <div className="col-md-4 col-sm-12">
            <div className="divWithPad">
              <Workspaces />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="divWithPad">
              <Projects />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="divWithPad">
              <Pages />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectManager;
