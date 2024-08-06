import React from "react";
import logo from "../imgs/logo2.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
const Nav = () => {
  return (
    <>
      <div className="top-bar d-none d-md-block fixed-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="top-bar-left">
                <div className="text">
                  <i className="far fa-clock"></i>
                  <h2>8:00 - 17:00</h2>
                  <p>Lun - Sam</p>
                </div>
                <div className="text">
                  <i className="fa fa-phone-alt"></i>
                  <h2>0664843295 / 0953838037</h2>
                  <p>Pour Rendez-Vous</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-bar-right">
                <div className="social">
                  <a href="https://www.facebook.com/profile.php?id=100063785806544&sk=about">
                    <i class="fab fa-facebook-f"></i>
                  </a>

                  <a href="https://www.instagram.com">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-sm navbar-drak fixed-top">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
              Accueil <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                A propos{" "}
              </a>
            </li>

            <ul className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/Produit "
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="tree"
                aria-expanded="false"
              >
                Nos Services
              </a>
              <li
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/Melamine">
                  {" "}
                  Climatisation
                </a>
                <a className="dropdown-item" href="/CouvreChant">
                  Plomberie
                </a>
                <a className="dropdown-item" href="/Plaque">
                  chauffage
                </a>
                <a className="dropdown-item" href="/Higlosee">
                  sanitaire
                </a>
              </li>
            </ul>
            <li className="nav-item">
        <a className="nav-link" href="/Similateur"> Nos réalisations </a>
      </li>
            <li className="nav-item">
              <a className="nav-link " href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Nav;
