import React, { useEffect } from "react";
import "./page.css";
import Footer from "../component/Footer";

import photo10 from "../imgs/cl1.webp";
import photo12 from "../imgs/cl2.jpg";
import photo16 from "../imgs/cl3.jpg";

import photo100 from "../imgs/cl5.jpg";
import photo120 from "../imgs/cl4.jpg";
import photo160 from "../imgs/cl7.webp";

import photo1 from "../imgs/clim0.jpeg";
import photo2 from "../imgs/clim2.jpg";
import photo3 from "../imgs/clim1.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="contact1"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <h1
          data-aos="fade-up"
          className="h1"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          NordSanitaire
        </h1>
        <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          Propose une large gamme de services de climatisation, allant des
          travaux d'installation aux réparations et à l'entretien.
        </h3>
      </div>
      <div className="cont">
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          {" "}
          Notre entreprise est spécialisée dans l'installation de systèmes de
          climatisation pour les résidences et les entreprises. Nos équipes de
          professionnels qualifiés sont là pour vous aider à choisir le système
          de climatisation qui correspond parfaitement à vos besoins et à votre
          budget.
        </p>
      </div>
      <section className="about-us7">
        <div
          data-aos="fade-up"
          className="container-about-us7"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
            {" "}
            Plomberie
          </h1>
          <div className="row ">
            <div className=" col-md-6">
              <p
                className="texte"
                data-aos="fade-up-top"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                {" "}
                <span>NordSanitaire</span>,se spécialise dans la prestation de
                services de plomberie haut de gamme répondant à l'ensemble de
                vos besoins. Nous comprenons l'importance d'avoir un système de
                plomberie fonctionnel et fiable, que ce soit dans votre
                résidence ou votre entreprise. C'est pourquoi nous mettons à
                votre disposition une vaste gamme de services professionnels
                pour résoudre tous vos problèmes de plomberie. Nos services
                comprennent la réparation de fuites d'eau <br />
              </p>
            </div>
            <div
              className="col-md-5"
              data-aos="fade-up-top"
              data-aos-once="true"
            >
              <div
                id="carouselExampleControls7"
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
                  data-bs-target="#carouselExampleControls7"
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
                  data-bs-target="#carouselExampleControls7"
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="about-us5">
        <div
          data-aos="fade-up"
          className="container-about-us5"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row ">
            <div
              className="col-md-5"
              data-aos="fade-up-top"
              data-aos-once="true"
            >
              <div
                id="carouselExampleControls8"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={photo100} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo120} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo160} class="silder" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls8"
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
                  data-bs-target="#carouselExampleControls8"
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

            <div className=" col-md-6">
              <p
                className="texte"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                {" "}
                <span>NordSanitaire</span>, Notre équipe de professionnels
                qualifiés sont prêtes à intervenir rapidement et efficacement
                pour résoudre tous vos problèmes de plomberie. Que ce soit pour
                des réparations urgentes, des remplacements de composants ou des
                projets d'installation complexes, nous sommes en mesure de vous
                offrir des solutions adaptées à vos besoins spécifiques. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="divv">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <section className="about-us7">
        <div
          data-aos="fade-up"
          className="container-about-us7"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row ">
            <div className=" col-md-6">
              <p
                className="texte"
                data-aos="fade-up-top"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                {" "}
                <span>NordSanitaire</span>, la satisfaction de nos clients est
                primordiale. Nous nous efforçons de dépasser vos attentes en
                vous offrant un service fiable, ponctuel et respectueux de votre
                budget. Faites-nous confiance pour tous vos besoins en plomberie
                et profitez de notre expertise et de notre engagement envers la
                qualité. Contactez-nous dès aujourd'hui pour prendre rendez-vous
                ou pour obtenir plus d'informations sur nos services. <br />
              </p>
            </div>
            <div
              className="col-md-5"
              data-aos="fade-up-top"
              data-aos-once="true"
            >
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={photo1} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo2} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo3} class="silder" alt="..." />
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
      <Footer />
    </>
  );
};
export default Contact;
