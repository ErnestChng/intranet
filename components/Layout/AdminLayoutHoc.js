import "../../styles/styles.scss";
import AdminHeader from "../../components/Layout/AdminHeader";
import AdminSidebar from "../../components/Layout/AdminSidebar";
import AdminControlSidebar from "../../components/Layout/AdminControlSidebar";
import AdminContent from "../../components/Layout/AdminContent";
import PropTypes from "prop-types";
import AdminFooter from "../../components/Layout/AdminFooter";

/**
 * Main admin layout - A Higher Order Component
 */
class AdminLayoutHoc extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <AdminHeader />
        <AdminSidebar />
        <AdminContent
          title={this.props.contentTitle}
          titleButton={this.props.contentTitleButton}
        >
          {this.props.children}
        </AdminContent>
        <AdminControlSidebar />
        <AdminFooter
          rightContent={<b>Academic Year 19/20 Version 1.1.1</b>}
          //   rightContent={"Academic Year 19/20 Version 1.1.1"}
          leftContent={<div>I must be an element</div>}
        />
      </div>
    );
  }
}

AdminLayoutHoc.propTypes = {
  contentTitle: PropTypes.string,
  contentTitleButton: PropTypes.element
};
export default AdminLayoutHoc;
