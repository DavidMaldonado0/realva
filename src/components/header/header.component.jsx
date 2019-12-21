import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss';



export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="fixed-top-added">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-5">
                                <img src={require('../../assets/logorounded.jpg')} alt="" className="hero-img img-fluid image" />
                            </div>
                            <div className="col-sm-6 col-md-7">
                                <div className="hero-content">
                                    <h1 className="text title">REALVA</h1>
                                    <p className="text mt-3 parragraph">Más de 30 años de calidad y servicio en el mercado agropecuario y veterinario de Honduras 
                                    </p>
                                    <ul className="pair-btns-list">
                                        <CustomButton href="#" onclick="cotizar()" className="custom-button cbtn btn-grad btn-shadow btn-width">Comprar</CustomButton>
                                        <CustomButton className="custom-button cbtn btn-grad-s btn-shadow btn-width">Contacto</CustomButton>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
