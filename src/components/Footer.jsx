import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../CSS/FooterStyle.css';

    const Footer = () => {
        return (
          <footer id="footer">
            <div className="container-fluid text-light">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <h4>Garza Mora</h4>
                  <p>Servicio de catering privado</p>
                </div>
        
                <div className="col-lg-3 col-md-6">
                  <h4>Nuestras redes sociales</h4>
                  <ul className="navbar-nav flex-row flex-wrap text-light">
                    <li className="nav-item col-6 col-md-auto p-3">
                      <a href="https://www.facebook.com/Garzamoragourmet" className="text-light">
                        <FontAwesomeIcon icon={faFacebook} style={{fontSize:'15px',color:'purple'}}/>
                      </a>
                    </li>
                    <li className="nav-item col-6 col-md-auto p-3">
                      <a href="https://www.instagram.com/garza.mora/" className="text-light">
                        <FontAwesomeIcon icon={faInstagram} style={{fontSize:'15px',color:'purple'}} />
                      </a>
                    </li>
                    <li className="nav-item col-6 col-md-auto p-3">
                      <a href="https://api.whatsapp.com/send?phone=092010787" className="text-light"  target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '15px', color: 'purple' }} className="my float" />
                      </a>
                    </li>
                  </ul>
                </div>
        
                <div className="col-lg-3 col-md-6">
                  <h4>Contactanos</h4>
                  <p>
                    Dr. Joaquín Requena 2945 <br />
                    Montevideo, Uruguay 🌎<br />
                    <strong>Email:</strong> garzamorave@gmail.com
                  </p>
                </div>
        
                <div className="col-lg-3 col-md-6">
                  <h4>News Letter</h4>
                  <p>Si queres enterarte de todas las novedades en nuestro menú suscribite</p>
                  <hr />
                  <form action="post">
                    <div className="input-group">
                      <input type="email" className="form-control" name="email" placeholder="garzamorave@gmail.com" />
                      <div className="input-group-append">
                        <button className="btnFooter"  type="submit">Suscribite</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        );
      };
      
      export default Footer;
      
      
      
      
      
      
      
