import * as React from "react";
import Header from "./../../Header/Header";
import "./Projects.css";

class Projects extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="Projects">
        <Header title="Projects" icon="fa fa-book fa-5x" count={this.props.workspaces.length} />
        <ul className="list-group list">
          {this.props.workspaces.map((workspace: any, key: number) => {
            return (
              <div className="list-group-item" key={key}>
                <div className="item">
                  <span>{workspace.workspaceName.substring(0, 10)}</span>
                  <span className="item-right">
                    {workspace.workspaceName.substring(0, 10)}
                  </span>
                </div>
                <div>
                  <p className="item-left">
                    {workspace.workspaceDesc.substring(0, 20)}...
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Projects;
