import Link from "next/link";
import PropTypes from "prop-types";
import { withRouter } from "next/router";

class AdminSidebar extends React.Component {
  render() {
    const { pathname } = this.props.router;
    return (
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        style={{ minHeight: "100%" }}
      >
        <Link href="/">
          <a className="brand-link text-center">
            <i className="fa fa-home fa-2x brand-image ml-2" />
            <span className="brand-text font-weight-light">
              Sheares Intranet
            </span>
          </a>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a className="nav-link">
                  <p>Admin</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <p>Navigation</p>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={[
                      "nav-link",
                      pathname === "/" ? "active" : ""
                    ].join(" ")}
                  >
                    <i className="nav-icon fa fa-home" />
                    <p>Home</p>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={[
                    "nav-link",
                    pathname === "/admin" ? "active" : ""
                  ].join(" ")}
                >
                  <i className="nav-icon fa fa-user-circle" />
                  <p>
                    Admin
                    <i className="right fa fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Account</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>CCA</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Import</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Settings</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview menu-closed">
                <a href="#" className="nav-link">
                  <i className="nav-icon fa fa-dashboard" />
                  <p>
                    My Account
                    <i className="right fa fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Change Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fa fa-circle-o nav-icon" />
                      <p>Sign Out</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

AdminSidebar.propTypes = {
  projectName: PropTypes.string
};

AdminSidebar.defaultProps = {
  projectName: "AdminLTE 3"
};

export default withRouter(AdminSidebar);
