import React,{useEffect}  from "react";
import "./Contact.css";
import Footer from "./Footer";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import photo1 from "../imgs/phone.png";
import photo2 from "../imgs/mail.png";
import photo3 from "../imgs/map.png";

import {FaShippingFast} from 'react-icons/fa';
import {BsCheckSquareFill} from 'react-icons/bs';
import{GiLampreyMouth} from 'react-icons/gi' ;



import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     
       
      <div className=" contact" >
       <h1>CONTACTEZ-NOUS</h1>

      </div>
      <div className="pricing" data-aos="fade-up" data-aos-duration="2000" >
        <h1> NOS CONTACT</h1><br></br>
        <h2  data-aos="fade-up"
     data-aos-duration="2000">Votre problème est résolu par un simple appel. Contactez-nous aujourd'hui.</h2><br></br><br></br>
        <div className="card-container" data-aos="fade-up"
     data-aos-duration="2000">
       </div>
       </div>

      <section className="card2"  data-aos="fade-up"
     data-aos-duration="2000">
         <div className="mm">
          <div className="contt">
        <img src={photo1}></img> 
         <h3>Téléphone</h3>
         <p> 0664843295 / 0953838037
            </p>
            <p><img  src={photo2}></img> 
            <h3>Email</h3>
            nordsanit59@gmail.com
            </p>
            <p><img  src={photo3}></img>
            <h3>Addresse</h3> 
            57 cite notre dame 59138 Pont S/Sambre
            </p>

            </div>

         </div>
         <div className="mm2">
                 
         <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.1052687250954!2d10.585029074721119!3d36.64791807627079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c266eb315032ff%3A0x3553d97bd8d48cd7!2s57%20Cit%C3%A9%20Notre%20Dame%2C%2059138%20Pont-sur-Sambre%2C%20France!5e0!3m2!1sfr!2stn!4v1693343459787!5m2!1sfr!2stn"
                     allowfullscreen=""
                      loading="lazy"
                       referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        
         </div>
      </section>
      <br></br>
       <br></br>
      <div className="row1">
            <div className="col-md-3" data-aos="fade-right"
                     data-aos-anchor="#example-anchor"
                     data-aos-offset="500"
                     data-aos-duration="2000" >
                <div className="service__box ">
                  <div className="icon">
                      <FaShippingFast/>
                  </div>
                  <div className="service__meta">
                    <p className="p  service__text">
                    Rapidité
                    </p>
                  </div>
                </div>
              </div>
           
              <div className="col-md-3" data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                   data-aos-offset="500"
                   data-aos-duration="2000">
                <div className="service__box ">
                  <div className="icon">
                    <BsCheckSquareFill/>
                  </div>
                  <div className="service__meta">
                    <p className="p service__text">
                    
Dévouement et maîtrise
                    </p>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
              <div className=" p service__box ">
                <div className="icon">
                  <GiLampreyMouth/>
                </div>
                <div className="service__meta">
                  <p className="p service__text">
                  précision
                  </p>
              </div>
            </div>
          </div>




        </div>


      <Footer/>
    </>
  );
};
export default Contact;
