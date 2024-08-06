import React, { useEffect } from "react";
import "./similateur.css";

import Footer from "../component/Footer";

import photo10 from "../imgs/oo3.jpg";
import photo12 from "../imgs/oo1.jpg";
import photo16 from "../imgs/a1.png";

import photo100 from "../imgs/lavb2.webp";
import photo120 from "../imgs/lavb3.webp";
import photo160 from "../imgs/lavb1.webp";

import photo101 from "../imgs/im.jpg";
import photo121 from "../imgs/im3.jpg";
import photo161 from "../imgs/oo5.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="contact4"
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
          Propose une large gamme de services de Sanitaire, allant des travaux{" "}
          <br></br> d'installation aux réparations et à l'entretien.
        </h3>
      </div>
      <div className="cont">
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          {" "}
          Notre entreprise se spécialise dans l'installation personnalisée de
          salles de bain et de systèmes sanitaires pour les résidences et les
          entreprises. Nos experts qualifiés sont là pour vous accompagner dans
          la conception d'une salle de bain qui répond parfaitement à vos
          besoins et reflète votre style de vie.
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
            Salle de Bain & Sanitaire
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
                <span>NordSanitaire</span>, propose une vaste sélection de
                produits sanitaires haut de gamme, comprenant des lavabos
                élégants, des toilettes modernes, des baignoires relaxantes, des
                cabines de douche sophistiquées, ainsi que des robinets et des
                accessoires de salle de bain de qualité. En travaillant en
                partenariat avec les meilleurs fabricants de l'industrie, nous
                nous engageons à vous offrir des produits durables,
                esthétiquement plaisants et fonctionnels. <br />
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
                <span>Nord Sanitaire</span>, Notre équipe met un point d'honneur
                à réaliser des installations professionnelles. Nous avons
                l'expertise nécessaire pour gérer les projets de toutes tailles,
                en veillant à ce que chaque détail soit pris en compte, de la
                sanitaire Faites confiance à notre entreprise pour transformer
                votre salle de bain en un espace à la fois pratique et
                esthétiquement remarquable. Nous sommes là où le confort et le
                design se marient harmonieusement. <br />
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
                <span>Nord Sanitaire</span>, vous accueille chaleureusement et
                vous encourage à nous contacter dès aujourd'hui pour discuter en
                détail de vos projets de salle de bain. Notre équipe dévouée et
                passionnée mettra tout en œuvre pour vous offrir bien plus qu'un
                simple service. Grâce à notre expertise technique approfondie,
                nous serons en mesure de vous proposer des solutions
                personnalisées, parfaitement adaptées à vos besoins spécifiques.{" "}
                <br />
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
                    <img src={photo101} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo121} class="silder" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={photo161} class="silder" alt="..." />
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
