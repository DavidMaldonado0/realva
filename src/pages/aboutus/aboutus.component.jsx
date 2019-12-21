import React, { Component } from 'react';
import Cards from '../../components/cards/cards.component';
import './aboutus.styles.scss';


export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <section className="section1 clearfix">
                        <div className="textcenter">
                            <span className="shtext">Nosotros</span>
                            <span className="seperator"></span>
                            <h1>Perfil de la Empresa</h1>
                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className="hero-content">
                                    <h1 className="text abouttitle">Nuestra Historia</h1>
                                    <p className="text mt-3 parragraph aboutparr"> Distribuidora REALVA es una empresa familiar fundada el 27 de Noviembre de 1987 por el Doctor en Medicina Veterinaria Rolando Alvarenga, y su esposa la Licenciada en Microbiología, Aida Castillo.   La empresa es fundada para proveer al mercado agropecuario de Honduras con vacunas de gran calidad y con el mejor manejo de la cadena de frio.  De ahí nace su primer slogan, “REALVA, la casa de las vacunas”. 
                                    <br/> Al establecerse como un actor de renombre en el mercado agropecuario del país, la empresa comienza a diversificar, importando y distribuyendo productos farmacéuticos veterinarios para animales de producción.  Con líneas de productos de la más alta calidad, la empresa logra establecerse aún más como una fuente de soluciones para el productor nacional. <br/>
                                    Luego de un periodo de crecimiento sostenido, a mediados de los años 90,  Distribuidora REALVA abre su sucursal en la zona norte, en la ciudad de San Pedro Sula, siendo esta dirigida con gran éxito por el Licenciado Jorge Alvarenga.  Así, la empresa atiende mejor y mas rapido a todos los departamentos del país mediante distribución en giras, envíos y las tiendas en las dos ciudades mas importantes del país. 
                                    En esta década también, se diversifica el portafolio para atender las necesidades de los Animales de Compañía, entendiendo la importancia de este segmento que años después pasaría a ser uno de los mas importantes de la empresa y el mercado hondureño en general.
                                    <br/> Durante mas de 30 años de participación en el mercado nacional, REALVA se caracteriza por distribuir productos de gran calidad, respaldados por una empresa con un fuerte enfoque en las buenas relaciones con sus clientes y proveedores. 
                                    Distribuidora REALVA se responsabiliza a seguir atendiendo las necesidades del mercado agropecuario y veterinario del país, con sus líneas de productos de gran calidad.  Así mismo, la empresa se compromete a innovar y desarrollar nuevos proyectos para brindar soluciones de calidad y de excelente valor para la inversión de sus clientes y el bienestar de los mercados donde participe.
                                    Distribuidora REALVA, más de 30 años de calidad y servicio en el mercado agropecuario y veterinario de Honduras.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="hero-content">
                                    <h1 className="text title">REALVA</h1>
                                    <p className="text mt-3 parragraph"> Texto de Información de la empresa, productos, imágenes, etc
                                    </p>
                                </div>
                            </div>
                            <Cards></Cards>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
