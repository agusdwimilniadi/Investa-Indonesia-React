import logo from "../asset/img/logo/NEW-INVESTA.png";
let Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <a href="index.html" className="navbar-brand">
          <img src={logo} alt="Logo-Investa" />
        </a>
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
            <a href="index.html" className="nav-item nav-link on-active">
              Home
            </a>
            <a href="cara-kerja.html" className="nav-item nav-link">
              Cara Kerja
            </a>
            <a href="proyek.html" className="nav-item nav-link">
              Proyek
            </a>
            <a href="mitra.html" className="nav-item nav-link">
              Mitra
            </a>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lainnya
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="tentang-kami.html">
                  Tentang Kami
                </a>
                <a className="dropdown-item" href="faq.html">
                  FAQ
                </a>
              </div>
            </li>
          </div>
          <div className="navbar-nav ml-auto">
            <a href="login.html" className="nav-item nav-link on-active">
              Login
            </a>
            <a href="register.html" className="nav-item nav-link">
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
