import * as React from "react";
import Header from "./../../Header/Header";
import "./Workspaces.css";
class Workspaces extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="Workspaces">
        <Header title="Workspaces" icon="fa fa-briefcase fa-5x" count="3" />
      </div>
    );
  }
}

export default Workspaces;
