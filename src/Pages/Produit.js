import React from "react";
import './produit.css';

import { Link } from "react-router-dom";

import photo from "../imgs/1111.jpg";
import photo1 from "../imgs/2222.png";
import photo2 from "../imgs/3333.gif";
import photo3 from "../imgs/4444.gif";

import './produit.css';



const Produit=()=>{

  return (
    <>

     <section>
     <div class="container">

    <div class="gallery-container w-1 h-1 ">
      <div class="gallery-item">
        <Link to={'/Higlosee' } onClick={() => window.scrollTo(0, 0)}>
        <div class="image">
          <img src={photo}alt="nature"/>
        </div>
        <div class="text">Sanitaire</div>
        </Link>
      </div>
    </div>
    <div class="gallery-container  w-2 h-2">
      <div class="gallery-item">
        <Link to={"/Melamine"} onClick={() => window.scrollTo(0, 0)}>
        <div class="image">
          <img src={photo1}alt="nature"/>
        </div>
        <div class="text"> Climatisation</div>
        </Link>
      </div>
    </div>
    <div class="gallery-container w-2  h-1">
      <div class="gallery-item">
        <Link to={"/CouvreChant"} onClick={() => window.scrollTo(0, 0)}>
        <div class="image">
          <img src={photo2}alt="nature"/>
        </div>
        <div class="text">Plomberie</div>
        </Link>
      </div>
    </div>
    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <Link to={'/Plaque'}>
        <div class="image">
          <img src={photo3}alt="nature"/>
        </div>
        <div class="text">Chauffage</div>
        </Link>
      </div>
    </div>
  </div>
     </section>


    </> 
  )



};
export default Produit