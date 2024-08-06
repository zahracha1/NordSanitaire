import React, { useEffect } from "react";
import "./similateur.css";

import Footer from "../component/Footer";
import photo10 from "../imgs/ttt.png";
import photo12 from "../imgs/k.webp";
import photo16 from "../imgs/ss2.jpg";

import photo100 from "../imgs/s11.webp";
import photo120 from "../imgs/s12.webp";
import photo160 from "../imgs/po.png";

import photo101 from "../imgs/rf.png";
import photo121 from "../imgs/vv.png";
import photo161 from "../imgs/ze1.png";

import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="chauffage"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          NordSanitaire
        </h1>
        <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          Propose une large gamme de services de chauffage , allant des travaux{" "}
          <br className="br"></br> d'installation aux réparations et à
          l'entretien.
        </h3>
      </div>
      <div className="cont">
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          {" "}
          Notre entreprise se positionne en tant que spécialiste de
          l'installation de systèmes de chauffage au gaz et au fioul pour les
          résidences et les entreprises. Nous collaborons avec les fabricants
          les plus réputés de l'industrie afin de vous proposer des solutions de
          chauffage fiables, efficaces et parfaitement adaptées à vos besoins
          spécifiques, le tout en respectant votre budget.
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
            Chauffage au gaz & au fioul
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
                <span>NordSanitaire</span>, comprenne parfaitement que
                l'installation d'un nouveau système de chauffage représente un
                investissement significatif. C'est pourquoi nous proposons des
                services d'installation professionnels à des tarifs compétitifs,
                afin de vous offrir un excellent rapport qualité-prix.Notre
                objectif est de vous fournir une installation professionnelle de
                votre système de chauffage, réalisée par notre équipe d'experts
                qualifiés. <br />
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
                <span>Nord Sanitaire</span>,se compose de une équipe d'experts
                qualifiés est à votre disposition pour évaluer précisément vos
                besoins en matière de chauffage et vous fournir des conseils
                avisés sur les meilleures solutions à adopter. Que vous optiez
                pour un système de chauffage au gaz ou au fioul, nous veillons à
                ce que l'installation soit réalisée dans le strict respect des
                normes les plus rigoureuses, garantissant ainsi une performance
                optimale et une efficacité énergétique. <br />
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
                <span>Nord Sanitaire</span> , Faites appel à notre entreprise
                spécialisée dans l'installation de chauffages gaz et fioul pour
                concrétiser votre projet de chauffage. Contactez-nous dès
                aujourd'hui pour discuter de vos besoins spécifiques. Profitez
                de notre expertise et de notre engagement envers la qualité pour
                bénéficier d'une solution de chauffage fiable, efficace et
                adaptée à votre domicile ou votre entreprise. <br />
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
