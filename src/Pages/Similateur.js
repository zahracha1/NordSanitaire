import React,{useEffect ,Component}  from "react";
import "./Réalisation.css";


import Footer from "../component/Footer";
import { Link } from "react-router-dom"


import ch1 from '../imgs/bn1.jpg'
import ch2 from '../imgs/chap2.png'
import ch3 from '../imgs/réalisation/ch1.png'
import ch4 from '../imgs/réalisation/pl1.png'
import ch5 from '../imgs/réalisation/ch2.png'
import ch6 from '../imgs/réalisation/oo6.jpg'
import ch7 from '../imgs/réalisation/clim2.png'
import ch8 from '../imgs/réalisation/pl3.png'
import ch9 from '../imgs/réalisation/bb.webp'
import ch10 from '../imgs/réalisation/pl4.png'
import ch11 from '../imgs/réalisation/clim4.png' 
import ch12 from '../imgs/réalisation/t.webp' 
import ch13 from '../imgs/réalisation/pl2.png'
import ch14 from '../imgs/réalisation/ch6.png' 
import ch15 from '../imgs/réalisation/yu.webp'
import ch16 from '../imgs/réalisation/pl5.png'
import ch17 from '../imgs/réalisation/sani2.png'
import ch18 from '../imgs/réalisation/plo4.png'



import AOS from "aos";
import "aos/dist/aos.css";
class CouvreChant extends Component {

   componentDidMount() {
      AOS.init({
         offset: 200,
         duration: 600,
         easing: 'ease-in-sine',
         delay: 0,
      });
  }
  render() {
   return(
     <>

 <section className="Produit1" >
           <div className="realis1"  data-aos="zoom-in"  data-aos-duration="3000" data-aos-once="true">
                 < h1 className="titre" > NOS RÉALISATIONS</h1>
                 <h3 data-aos="fade-up"
                  data-aos-duration="3000">NordSanitaire est fier de partager quelques-unes de ses réalisations remarquables.</h3>
                </div>
                 <div class="container1">
               </div>
         </section>
         <section >

            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Meublesalledebain'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img src={ch1} width="300" height="200" /> 
                  <div className="des">Dépannage de climatiseur</div> 
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Habillagemurale'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch2} width="300" height="200" /> 
                  <div className="des">instalation Four électrique</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch3}  width="300" height="200"/>
                  <div className="des">installation d'un chauffage</div>
                  </div>
                  </Link>

               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Cuisine'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch4}  width="300" height="200"/>
                  <div className="des">réparation  de fuite </div>
                  </div>
                  </Link>
               </div>   
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Habillagemurale'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch5}  width="300" height="200"/>
                  <div className="des">Dépannage machine à laver</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1"  data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Cuisine'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch6}  width="300" height="200"/>
                  <div className="des">installation sanitaire</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Meublesalledebain'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch7}  width="300" height="200"/>
                  <div className="des">Dépannage de climatiseur</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Cuisine'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch8}  width="300" height="200"/>
                  <div className="des">Dépannage du toilette</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch9}  width="300" height="200"/>
                  <div className="des">installation du chauffage</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Habillagemurale'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch10}  width="300" height="200"/>
                  <div className="des">Dépannage machine à laver</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Meublesallebain'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch11}  width="300" height="200"/>
                  <div className="des">installation de climatiseur</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1"data-aos="fade-up"data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch12}  width="300" height="200"/>
                  <div className="des">installation de chauffage</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Cuisine'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch13}  width="300" height="200"/>
                  <div className="des">installation de sanitaire</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Habillagemurale'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch14}  width="300" height="200"/>
                  <div className="des">dépannage machine à laver</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Bureau'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch15}  width="300" height="200"/>
                  <div className="des">installation de chauffage</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Habillagemurale'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch16}  width="300" height="200"/>
                  <div className="des">installation de plomberie</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Cuisine'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch17}  width="300" height="200"/>
                  <div className="des">dépannage du toilette</div>
                  </div>
                  </Link>
               </div>
            </div>
            <div className="responsive1" data-aos="fade-up" data-aos-once="true">
               <div className="gallary1">
               <Link to={'/Habillagemurale'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="box-gallery1">
                  <img  src={ch18}  width="300" height="200"/>
                  <div className="des">installation de plomberie</div>
                  </div>
                  </Link>
               </div>
            </div>

         </section>
         <div className="fin">
      <h1 className="mahdoush">jjkkygslozgyhkvodygcldbclk</h1>
      </div>
     <Footer/>
    </>
  );
};
}
export default CouvreChant;