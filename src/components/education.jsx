import React from "react";
import '../styles/education.scss';
import ulblogo from '../assets/images/ulb.png'
import glyndwrlogo from '../assets/images/glyndwr.png'
import esilogo from '../assets/images/esi.png'

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 id="education">Education</h1>
                <div className="educationroot">
                    <ul>
                        <li>
                            <div className="educationheader">
                                <img src={ulblogo} alt="ULB" />
                                <div>
                                    <h2>Université Libre de Bruxelles</h2>
                                    <h6>09/2016 - 09/2017</h6>
                                </div>
                            </div>    
                            <ul className="content">
                                <li>Master in cybersecurity - DISCONTINUED</li>
                            </ul>
                        </li>
                        <li>
                            <div className="educationheader">
                                <img src={glyndwrlogo} alt="Glyndwr" />
                                <div>
                                    <h2>Glyndwr University</h2>
                                    <h6> 01/2015 - 05/2015</h6>
                                </div>
                            </div>
                            <ul className="content">
                                <li>Erasmus in video game development</li>
                                <li>AI, Blender, Unity</li>
                            </ul>
                        </li>
                        <li>
                            <div className="educationheader">
                                <img src={esilogo} alt="ESI" />
                                <div>
                                    <h2>Ecole Supérieure d'Informatique</h2>
                                    <h6>09/2011 - 06/2015</h6>
                                </div>
                            </div>
                            <ul className="content">
                                <li>Network and development Bachelor</li>
                                <li>C, C++, Java, Network, Security, administration</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Education;