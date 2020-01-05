import PropTypes from "prop-types";

const AdminContent = props => {
  return (
    <div className="content-wrapper" style={{ minHeight: "93vh" }}>
      <div className="content-header">
        {props.title && (
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-10">
                <h1 className="m-0 text-dark">{props.title}</h1>
              </div>
              <div className="col-sm-2 text-right text-muted">
                {props.titleButton && props.titleButton}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content">
        <div className="container-fluid">{props.children}</div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              ...
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              50
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

AdminContent.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.element
};

export default AdminContent;
