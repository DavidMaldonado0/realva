import React, { Component } from 'react';
import './footer.styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6 className="title">REALVA</h6>
                <h6>Contacto</h6>
                <h5>Tegucigalpa</h5>
                <p> Edificio Alvarenga, Boulevard Morazán
                    Contiguo Paso Desnivel Lomas del Guijarro +(504) 2236-5531. info@realva.net.
            </p>
                <h5>San Pedro Sula</h5>
                <p> 5ta Avenida Lempira (Los Leones), entre 10 y 11 Calle
                    Contiguo a la ATIC. +(504) 2552-9466
            </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Productos y Servicios</h6>
                <ul className="footer-links">
                  <li><a href="/">Vitaminas</a></li>
                  <li><a href="/">Desparasitantes</a></li>
                  <li><a href="/">Antibioticos</a></li>
                  <li><a href="/">Alimentos</a></li>
                  <li><a href="/">Medicamentos</a></li>
                  <li><a href="/">Otros</a></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Información</h6>
                <ul className="footer-links">
                  <li><a href="/">Contactanos</a></li>
                  <li><a href="/">Productos</a></li>
                  <li><a href="/">Proveedores</a></li>
                  <li><a href="/">Mapa del sitio</a></li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">REALVA &copy; 2019, Todos los derechos reservados.
            </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="https://es-la.facebook.com/RealvaHonduras/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                  <li><a className="twitter" href="https://twitter.com/realvahonduras?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="https://instagram.com/realvahn?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                  <li><a className="youtube" href="https://youtube.com/?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
