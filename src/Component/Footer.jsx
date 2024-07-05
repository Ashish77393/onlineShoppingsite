import {Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="fluid-container footer_container footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer pt-2">
        <p className="col-md-4 mb-0 text-body-info">© 2024 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end footerlist">
          <li className="nav-item">
            <Link to="Feature" className="nav-link px-2 text-body-danger">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Pricing" className="nav-link px-2 text-body-danger">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Faqs" className="nav-link px-2 text-body-danger">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link px-2 text-body-danger">
              About
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
