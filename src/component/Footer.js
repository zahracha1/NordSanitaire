import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {FaPeopleCarry} from 'react-icons/fa'






import { Link } from "react-router-dom";
function Footer() {
  return (
   <>
   <div className="Footer">
      <div className="container1">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <h3><span>NORD</span>SANITAIRE</h3>
            <p>Société de plomberie est une entreprise spécialisée <br></br> dans l'installation, 
               la réparation et l'entretien des systèmes <br></br> de plomberie. </p>

          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5>Quick Links</h5>
            <ul>
              <li className="nav-item">
              <Link to={'/'}> Accuiel</Link>  
              </li>
              <li className="nav-item">
              <Link to={'/About'}> A Propose</Link>  
              </li>
              <li className="nav-item">
              <Link to={'/Melamine'}> Climatisation</Link>  
              </li>
              <li className="nav-item">
              <Link to={'/CouvreChant'}>Plomberie</Link>  
              </li>
              <li className="nav-item">
              <Link to={'/Higlosee'}>Sanitaier</Link>  
              </li>
              <li className="nav-item">
              <Link to={'/Plaque'}> Chouffage </Link>  
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h5>Quick Links</h5>
            
            <p><i class="fas fa-phone-alt">    </i> 0664843295 / 0953838037</p>
            <p><i class="fas fa-envelope"></i>nordsanit59@gmail.com</p>
            <p><i class="fas fa-map-marker-alt"></i>57 cite notre dame 59138 Pont S/Sambre</p>
          </div>
        </div>
      </div>
    </div><div className='Last-footer'>
        <p>© Copyright 2023 -NordSanitaire.</p>
      </div>
      </>
  );
}

export default Footer;
