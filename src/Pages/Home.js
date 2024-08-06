import "./Home.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import photo10 from "../imgs/meh.jpg";
import photo12 from "../imgs/meh1.png";
import photo16 from "../imgs/meh2.png";
import Footer from "../component/Footer";
import Produit from "./Produit";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="header">
        <div className="contnent">
          <div className="container">
            <div className="row">
              <div className="col md-4">
              <div className="col md-4" >
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-us">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="2000"
          className="container-about-us"
        >
          <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
            {" "}
            L’HISTOIRE DE NOTRE SUCCÈS
          </h1>
          <div className="row ">
            <div className=" col-md-6">
              <p
                className="texte"
                data-aos="fade-up-top"
                data-aos-once="true"
                data-aos-duration="2000"
              >
                {" "}
                <span>Nord Sanitaire</span>, est une société spécialisée dans
                les services de plomberie, de sanitaire, de climatisation et
                d'électroménager. Leur équipe d'experts qualifiés propose une
                gamme complète de solutions pour l'installation, la réparation
                et l'entretien des systèmes de plomberie. Ils sont compétents
                dans la manipulation des tuyaux, des robinets, des
                canalisations... <br />
              </p>
            </div>
            <div
              className="col-md-5"
              data-aos="fade-up-top"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={photo10} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo12} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo16} class="silder" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" section-produit"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <h1>NOS Services</h1>
        <p data-aos="fade-up" data-aos-once="true">
          Aujourd’hui <span>NordSanitaire </span>propose une vaste gamme de
          services (Plomberie, Sanitaire, Climatisation, Chauffage ,
          Electroménager).
        </p>
        <div className="produit">
          <Produit />
        </div>
        <br />
      </section>

      <div className="row">
        <div
          className="adresse"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <h2>NOTRE ADRESSE</h2>
        </div>
        <iframe
          data-aos="flip-left"
          data-aos-once="true"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.1052687250954!2d10.585029074721119!3d36.64791807627079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c266eb315032ff%3A0x3553d97bd8d48cd7!2s57%20Cit%C3%A9%20Notre%20Dame%2C%2059138%20Pont-sur-Sambre%2C%20France!5e0!3m2!1sfr!2stn!4v1693343459787!5m2!1sfr!2stn"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Header;
