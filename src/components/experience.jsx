import React from "react";
import '../styles/experience.scss';
import becodelogo from '../assets/images/becode.png';
import emakinalogo from '../assets/images/emakina.png';
import pluritechlogo from '../assets/images/pluritech.png';
import rtllogo from '../assets/images/rtl.png';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 id="experiences">Experiences</h1>
                    <div className="jobwrapper">
                        <div className="job">
                            <div className="jobheader">
                                <img src={becodelogo} alt="becode" />
                                <div>
                                    <h2>Becode</h2>
                                    <h6>08/2020 - 07/2021</h6>
                                </div>
                            </div>
                            <h3>Teacher, Program Lead, Market Insight</h3>  
                            <ul>
                                <li>Lead Coach DevSecOps : Managing DevSecOps class, content production, program design</li>
                                <li>Coach WebDev : Managing Webdev class</li>
                                <li>AI Devops : Design & Setup of a GPU worker on site usable by learner from home to train and infer models through Gitlab</li>
                                <li>Program builder : Insights on program paths and careers possibility</li>
                                <li>White Hacker Program Lead : Build from scratch a cloud security program for UE covering AZ500 - AZ900 certifications</li>
                                <li>Career Advice : Insights on career paths and program paths</li>
                                <li>IT : Design, Build, Setup of a server farm for learners training</li>
                                <li>Fablab : Build a basic fablab @becentral</li>
                            </ul>
                        </div>
                        <div className="job">
                            <div className="jobheader"> 
                                <img src={emakinalogo} alt="emakina" />
                                <div>
                                    <h2>Emakina</h2>
                                    <h6>03/2018 - 02/2020</h6>
                                </div>
                            </div>
                            <h3>IT System Administrator</h3>
                            <ul>
                                <li>Security : Design and Enforce GDPR Security compliance rules, SIEM management, audit and secure acquisitions in GCC regions</li>
                                <li>AI : IT advices, Plan, Design, Build, Setup AI training server and devops pipeline</li>
                                <li>DevOps : Pipeline implementation, code troubleshooting</li>
                                <li>Infrastructure : Backup manager, Datacenter decomission</li>
                                <li>Process : Refactor onboarding process, deployment process, zero touch deployment in middle east</li>
                                <li>AudioVisual : Worldwide keynote broadcasting manager, Design, plan, build, deploy new workflows for AV department (HW, ingest, licences)</li>
                            </ul>
                        </div>
                        <div className="job">
                            <div className="jobheader">
                                <img src={rtllogo} alt="rtl" />
                                <div>
                                    <h2>RTL</h2>
                                    <h6> 01/2018 - 02/2018</h6>
                                </div>
                            </div>
                            <h3>IT System Administrator</h3>
                            <ul>
                                <li>Infrastructure : Design, plan, deploy new broadcasting servers, ESXI, vSan, NSX Training</li>
                                <li>Helpdesk : Troubleshooting inhouse tools, RTL infrastructure</li>
                            </ul>
                        </div>
                        <div className="job">
                            <div className="jobheader">
                                <img src={pluritechlogo} alt="pluritech" />
                                <div>
                                    <h2>Pluritech</h2>
                                    <h6> 05/2015 - 12/2017</h6>
                                </div>
                            </div>
                            <h3>IT System Administrator</h3>
                            <ul>
                                <li>Infrastructure : Test and report GPU acceleration in rdp session host, implementation pabx/sfb</li>
                                <li>Security : Redesign DRP, Filter drivers programming to avoid ransomware</li>
                                <li>Helpdesk : Remote assistance, user onboarding, troubleshoot</li>
                            </ul> 
                        </div>
                    </div>
                </div>
        )
    }
}

export default Experience;