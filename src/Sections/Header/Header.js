import "./Header.css";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark"
        aria-label="First navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#1">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ width: "200px", height: "50px" }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample01">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#1">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
