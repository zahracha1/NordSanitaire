import React,{useEffect}  from "react";
import "./ChauffRealisation.css";

import { Link } from "react-router-dom"

import photo10 from "../imgs/réalisation/plomkemla2.png";


import ch1 from '../imgs/réalisation/p1.jpg'
import ch2 from '../imgs/réalisation/p2.jpg'
import ch3 from '../imgs/réalisation/p3.jpg'
import ch4 from '../imgs/réalisation/p4.jpg'
import ch5 from '../imgs/réalisation/p5.jpg'
import ch6 from '../imgs/réalisation/p6.jpg'
import ch7 from '../imgs/réalisation/p7.jpg'
import ch8 from '../imgs/réalisation/pl7.png'
import ch9 from '../imgs/réalisation/pl9.png'
import ch10 from '../imgs/réalisation/pl10.png'
import ch11 from '../imgs/réalisation/p10.jpg' 
import ch12 from '../imgs/réalisation/p11.jpg' 


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
           <h1>hzjzhjz</h1>
<br/> <br/>
         </section>

      <br/> <br/> <br/>
     
    </>
  );
};
export default Contact;
