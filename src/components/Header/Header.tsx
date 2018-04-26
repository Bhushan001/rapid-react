import * as React from "react";
import "./Header.css";

interface IHeaderProps {
  title?: string;
  icon?: string;
  count?: number; // Change the required prop to an optional prop.
}
const Header: React.SFC<IHeaderProps> = props => {
  return (
    <div className="row menu">
      <div className="col-md-6 col-sm-6 col-xs-6 box">
        <i className={props.icon} />
      </div>
      <div className="col-md-6 col-sm-6 col-xs-6">
        <h1>{props.count}</h1>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

Header.defaultProps = {
  count: 3,
  icon: "fa fa-file fa-5x",
  title: "Workspaces"
};

export default Header;
