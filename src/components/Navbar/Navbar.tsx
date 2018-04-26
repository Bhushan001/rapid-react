import * as React from "react";
import "./Navbar.css";
class Navbar extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <nav className="navbar navbar-custom">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                Rapid Designer
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a>Home</a>
              </li>
              <li>
                <a>Project Manager</a>
              </li>
              <li>
                <a>Designer</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
