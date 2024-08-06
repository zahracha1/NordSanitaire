import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import prod1 from "../../imgs/nv66.jpg";
import prod2 from "../../imgs/nv99.jpg";
import prod3 from "../../imgs/nv991.jpg";
import { TbAirConditioning } from "react-icons/tb";
import { GiHotSurface } from "react-icons/gi";
import { MdOutlinePlumbing } from "react-icons/md";
import { FaToilet } from "react-icons/fa";

import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="page-header">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={prod1} alt="First slide" />
              <div className="carousel-caption ">
                <h5>
                  DÉCOUVREZ NOTRE LARGE PALETTE DE MATÉRIAUX ET DE TEXTURES...
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={prod2} alt="Second slide" />
              <div className="carousel-caption ">
                <h5>
                  DÉCOUVREZ NOTRE LARGE PALETTE DE MATÉRIAUX ET DE TEXTURES...
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={prod3} alt="Third slide" />
              <div className="carousel-caption ">
                <h5>
                  DÉCOUVREZ NOTRE LARGE PALETTE DE MATÉRIAUX ET DE TEXTURES...
                </h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <BsFillArrowLeftCircleFill size={40} />
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <BsFillArrowRightCircleFill size={40} />
          </a>
        </div>
        <br></br>
        <br></br>

        <section
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="container-histoir">
            <h2>L’HISTOIRE DE NOTRE SUCCÈS</h2>
            <br></br> <br></br>
            <div className="col-md-12">
              <p>
                {" "}
                <span>NORD SANITAIRE</span>, est une société spécialisée dans
                les services de plomberie, de sanitaire, de climatisation et
                d'électroménager. Leur équipe d'experts qualifiés propose une
                gamme complète de solutions pour l'installation, la réparation
                et l'entretien des systèmes de plomberie. Ils sont compétents
                dans la manipulation des tuyaux, des robinets, des
                canalisations, des systèmes de drainage et des chauffe-eau,
                ainsi que dans d'autres équipements liés à l'eau et aux systèmes
                de chauffage. En plus de leurs services de plomberie, ils sont
                également spécialisés dans la climatisation et l'électroménager,
                offrant des services d'installation, de réparation et de
                maintenance des systèmes pour assurer un confort optimal dans
                les environnements résidentiels, commerciaux et industriels.
                <br />
                Notre entreprise se compose d'un personnel bien équilibré afin
                de gagner votre confiance et votre bonheur. L’ensemble des
                personnes responsables du succès de la société fournit des
                efforts constants afin de proposer à notre clientèle variée tous
                les services dont elle a besoin, tout au long de l’année, à des
                tarifs compétitifs.
              </p>
            </div>
          </div>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>

          <div
            className="container-service"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="col-md-20">
              <h2>Nos Services</h2>
            </div>

            <div className="row1">
              <div
                className="col-md-3"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <a href="/Melamine">
                  {" "}
                  <div className="service__box ">
                    <div className="icon">
                      <TbAirConditioning />
                    </div>
                    <div className="service__meta">
                      <p className="p  service__text">Climatisation</p>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className="col-md-3"
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <a href="/Plaque">
                  {" "}
                  <div className="service__box ">
                    <div className="icon">
                      <GiHotSurface />
                    </div>
                    <div className="service__meta">
                      <p className="p service__text">Chauffage</p>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <a href="/CouvreChant">
                  {" "}
                  <div className=" p service__box ">
                    <div className="icon">
                      <MdOutlinePlumbing />
                    </div>
                    <div className="service__meta">
                      <p className="p service__text">Plomberie</p>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
              >
                <a href="/Higlosee">
                  <div className=" p service__box ">
                    <div className="icon">
                      <FaToilet />
                    </div>
                    <div className="service__meta">
                      <p className="p service__text">Sanitaire</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
export default About;
