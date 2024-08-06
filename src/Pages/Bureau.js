import React,{useEffect}  from "react";
import "./ChauffRealisation.css";

import Footer from "../component/Footer";
import { Link } from "react-router-dom"

import photo10 from "../imgs/réalisation/backgroundchau.png";

import ch1 from '../imgs/chauffage/ce15.webp'
import ch2 from '../imgs/chauffage/ce12.webp'
import ch3 from '../imgs/chauffage/ce13.webp'
import ch4 from '../imgs/chauffage/ce17.webp'
import ch5 from '../imgs/chauffage/ce2.png'
import ch6 from '../imgs/chauffage/ce20.jpg'
import ch7 from '../imgs/chauffage/ce21.jpg'
import ch8 from '../imgs/chauffage/ce22.jpg'
import ch9 from '../imgs/chauffage/ce23.jpg'
import ch10 from '../imgs/chauffage/ce24.jpg'
import ch11 from '../imgs/chauffage/ce25.jpg' 
import ch12 from '../imgs/chauffage/ce4.png' 




import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

<div className="similateur">
               <div className="image" data-aos="flip-left" data-aos-duration="3000">
               <img  className="image-smilateur" src={photo10}  />
               <div className="thumbnail" >
                     </div>
                     </div>
                     </div>
         <section >

            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img src={ch1} width="300" height="200" /> 
                 
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch2} width="300" height="200" /> 
                  
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Higlosee'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch3}  width="300" height="200"/>
                
                  </div>
                  </Link>

               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
                  <div className="box-gallery1">
                  <img  src={ch4}  width="300" height="200"/>
                  
                  </div>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
                  <div className="box-gallery1">
                  <img  src={ch5}  width="300" height="200"/>
                  
                  </div>
               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
                  <div className="box-gallery1">
                  <img  src={ch6}  width="300" height="200"/>
                 
                  </div>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
                  <div className="box-gallery1">
                  <img  src={ch7}  width="300" height="200"/>
                  
                  </div>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch8}  width="300" height="200"/>
                
                  </div>
                </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Higlosee'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch9}  width="300" height="200"/>
                  
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
                  <div className="box-gallery1">
                  <img  src={ch10}  width="300" height="200"/>
                  
                  </div>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
                <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch11}  width="300" height="200"/>
                 
                  </div>
                  </Link>
                </div>
            </div>
            <div className="responsive1"data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
                  <div className="box-gallery1">
                  <img  src={ch12}  width="300" height="200"/>
                
                  </div>
               </div>
            </div>
           <h1 color="">hzjzhjz</h1>
<br/> <br/>
         </section>

      <br/> <br/> <br/>
      <Footer/>
     
    </>
  );
};
export default Contact;
