import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-dark header sticky-top">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/Home" className="nav-link px-2 text-danger">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Eletronices" className="nav-link px-2 text-white">
                  Eletronices
                </Link>
              </li>
              <li>
                <Link to="/Kids" className="nav-link px-2 text-white">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/Grocery" className="nav-link px-2 text-white">
                  Grocery
                </Link>
              </li>
              <li>
                <Link to="/Cloths" className="nav-link px-2 text-white">
                  Cloths
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <Link to="Login">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link to="/SignUpPage">
                <button type="button" className="btn btn-success btn-outline-light ">
                  Sign-up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
