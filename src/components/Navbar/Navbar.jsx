import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import logo from "../asset/img/logo/NEW-INVESTA.png";

let Navbar = () => {
  const location = useLocation();
  const nowLocation = location.pathname;

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo-Investa" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          style={{ color: "black" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link
              to="/"
              className={
                nowLocation === "/"
                  ? "nav-item nav-link on-active"
                  : "nav-item nav-link"
              }
            >
              Beranda
            </Link>
            <Link
              to="/carakerja"
              className={
                nowLocation === "/carakerja"
                  ? "nav-item nav-link on-active"
                  : "nav-item nav-link"
              }
            >
              Cara Kerja
            </Link>
            <Link
              to="/proyek"
              className={
                nowLocation === "/proyek"
                  ? "nav-item nav-link on-active"
                  : "nav-item nav-link"
              }
            >
              Proyek
            </Link>
            <Link
              to="/mitra"
              className={
                nowLocation === "/mitra"
                  ? "nav-item nav-link on-active"
                  : "nav-item nav-link"
              }
            >
              Mitra
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            <Link to="#" className="nav-item nav-link">
              Login
            </Link>
            <Link to="#" className="nav-item nav-link">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
