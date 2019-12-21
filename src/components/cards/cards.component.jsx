import React from 'react';
import './cards.styles.scss';

const Cards = () => (
    <div className="solution">
        <div className="cont">
            <div className="solutioncard">
                <div className="face face1">
                    <div className="content">
                       <h3>Misión</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Proveer a los mercados agropecuarios y veterinarios con productos y servicios de calidad y de gran valor para la inversión de los clientes, manteniendo como enfoque primordial el beneficio a la seguridad y bienestar de la comunidad.</p>
                    </div>
                </div>
            </div>
            <div className="solutioncard">
                <div className="face face1">
                    <div className="content">
                        <h3>Visión</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Ser un actor de gran valor en el mercado agropecuario y veterinario de Honduras y América Central, una empresa líder a nivel regional, innovando y sirviendo en las áreas relacionadas al desarrollo y la bioseguridad.</p>
                    </div>
                </div>
            </div>
            <div className="solutioncard">
                <div className="face face1">
                    <div className="content">
                        <h3>Valores</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>El Bien Común es Primero, Integridad, Calidad, Valor por su Inversión, Honestidad, Confianza, Comunicación, Pasión, Transparencia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Cards;