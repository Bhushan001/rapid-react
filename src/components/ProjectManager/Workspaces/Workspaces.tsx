import * as React from "react";
import Header from "./../../Header/Header";
import "./Workspaces.css";

class Workspaces extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // tslint:disable-next-line no-console
    console.log(`props`, this.props);
  }

  public render() {
    return (
      <div className="Workspaces">
        <Header title="Workspaces" icon="fa fa-briefcase fa-5x" count={this.props.workspaces.length} />
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

export default Workspaces;
