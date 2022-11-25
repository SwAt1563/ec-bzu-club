import "./Header.css";

import { NavItem } from "../../Components/index";
import { FaAlignJustify } from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top main-navbar">
        <div className="container">
          <Link className="navbar-brand text-light " to="/">
            نادي هندسة الحاسوب والكهرباء
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaAlignJustify className="menu-btn text-light" />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavItem link="/" active="true">
                الصفحة الأعلانية
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
