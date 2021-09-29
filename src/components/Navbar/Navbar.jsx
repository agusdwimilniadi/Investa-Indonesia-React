import { Link } from "react-router-dom";
import logo from "../asset/img/logo/NEW-INVESTA.png";
let Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Link to="#" className="navbar-brand">
          <img src={logo} alt="Logo-Investa" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link on-active">
              Beranda
            </Link>
            <Link to="/carakerja" className="nav-item nav-link">
              Cara Kerja
            </Link>
            <Link to="/proyek" className="nav-item nav-link">
              Proyek
            </Link>
            <Link to="/mitra" className="nav-item nav-link">
              Mitra
            </Link>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lainnya
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Tentang Kami
                </Link>
                <Link className="dropdown-item" to="#">
                  FAQ
                </Link>
              </div>
            </li>
          </div>
          <div className="navbar-nav ml-auto">
            <Link to="login.html" className="nav-item nav-link on-active">
              Login
            </Link>
            <Link to="register.html" className="nav-item nav-link">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
