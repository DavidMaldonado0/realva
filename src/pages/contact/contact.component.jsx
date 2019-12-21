import React, { Component } from 'react';
import './contact.styles.scss';

export default class Contact extends Component {
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="innerwrap">

                        <section className="section1 clearfix">
                            <div className="textcenter">
                                <span className="shtext">Contacto</span>
                                <span className="seperator"></span>
                                <h1>Contactanos</h1>
                            </div>
                        </section>

                        <section className="section2 clearfix">
                            <div className="col2 column1 first">
                            <div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=REALVA&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                            <div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=REALVA&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                            </div>
                            <div className="col2 column2 last">
                                <div className="sec2innercont">
                                    <div className="sec2addr">
                                        <p><span className="collig">Tegucigalpa :</span> Edificio Alvarenga, Boulevard Morazán Contiguo Paso Desnivel Lomas del Guijarro</p>
                                        <p><span className="collig">Teléfono :</span> +504 2236-5531</p>
                                        <p><span className="collig">San Pedro Sula :</span> 5ta Avenida Lempira (Los Leones) Entre 10 y 11 Calle Contiguo a la ATIC San Pedro Sula, Cortes</p>
                                        <p><span className="collig">Teléfono :</span> +504 2552-9466</p>
                                        <p><span className="collig">Email :</span> info@realva.net</p>
                                    </div>
                                </div>
                                
                                <div className="sec2contactform">
                                    <h3 className="sec2frmtitle">¿Tienes alguna consulta? Envíanos tu mensaje</h3>
                                    <form action="">
                                        <div className="clearfix">
                                            <input className="col2 first" type="text" placeholder="Nombre" />
                                            <input className="col2 last" type="text" placeholder="Apellido" />
                                        </div>
                                        <div className="clearfix">
                                            <input className="col2 first" type="Email" placeholder="Correo electrónico" />
                                            <input className="col2 last" type="text" placeholder="Número de Teléfono" />
                                        </div>
                                        <div className="clearfix">
                                            <textarea name="textarea" id="" cols="30" rows="7">Escribe tu mensaje aquí...</textarea>
                                        </div>
                                        <div className="clearfix"><input type="submit" value="Enviar" /></div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
