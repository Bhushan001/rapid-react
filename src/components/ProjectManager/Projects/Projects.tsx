import * as React from "react";
import Header from "./../../Header/Header";
import "./Projects.css";

class Projects extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="Projects">
         <Header title="Projects" icon="fa fa-book fa-5x" count="3"/>
      </div>
    );
  }
}

export default Projects;
