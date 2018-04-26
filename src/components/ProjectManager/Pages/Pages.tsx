import * as React from "react";
import Header from "./../../Header/Header";
import "./Pages.css";

class Pages extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="Pages">
        <Header title="Pages" icon="fa fa-file fa-5x" count="3"/>
      </div>
    );
  }
}

export default Pages;
