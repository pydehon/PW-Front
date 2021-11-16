import React from "react";
import '../styles/skills.scss';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="skillroot">
            <h1 id="skills">Skills</h1>
            <ul className="ulroot">
                <li>
                    <h2>IT</h2>
                    <ul className="ulskill">
                        <li>
                            <h3>Virtualization</h3>
                            <ul className="ulelement">
                                <li>VMWare ESXI, vSAN, vMotion</li>
                                <li>Microsoft Hyper-V</li>
                                <li>Proxmox, KVM, Qemu</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Containerization</h3>
                            <ul className="ulelement">
                                <li>Docker, Dockerfile, Docker-compose</li>
                                <li>Portainer</li>
                            </ul>
                        </li>
                        <li>
                            <h3>OS</h3>
                            <ul className="ulelement">
                                <li>Linux Family, Debian, Ubuntu, FreeBSD</li>
                                <li>Windows Family, Windows (3.1 -> 11), Windows Server (2000 -> 2019)</li>
                                <li>Android (4 -> 12)</li>
                                <li>OSX Family, OSX (8 -> 12), iOS (8 -> 13) </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Cloud</h3>
                            <ul className="ulelement">
                                <li>Azure, AAD, Monitoring, VPN, Gateway, Firewall, LB, RBAC, KeyVault, ARM Templates</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Management</h3>
                            <ul className="ulelement">
                                <li>Azure Intune</li>
                                <li>Jamf</li>
                                <li>VMWare vCenter</li>
                                <li>Cisco Meraki</li>
                            </ul>
                        </li>
                        <li>
                            <h3>DevOps</h3>
                            <ul className="ulelement">
                                <li>Agile, Scrum, CI/CD</li>
                                <li>Github Actions, Gitlab</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Services</h3>
                            <ul className="ulelement">
                                <li>Directories : Microsoft Active Directory, Yellow Pages, Samba</li>
                                <li>Remote Desktop : Microsoft RDP(Session Host, VDI), VMWare Horizon</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Network</h3>
                            <ul className="ulelement">
                                <li>Firewall, IDS, Switching, Routing</li>
                                <li>VPN, Certificate</li>
                                <li>HP Procurve, Cisco, Juniper, Pfsense</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 >Development</h2>
                    <ul className="ulskill">
                        <li>
                            <h3>Backend</h3>
                            <ul className="ulelement">
                                <li>C, C++, Java, PHP</li>
                                <li>Python, Flask</li>
                                <li>JS, NodeJS</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Frontend</h3>
                            <ul className="ulelement">
                                <li>HTML, CSS, SCSS</li>
                                <li>JS, React</li>
                            </ul>
                        </li>
                        <li>
                            <h3>AI</h3>
                            <ul className="ulelement">
                                <li>Python, numpy, panda, opencv</li>
                                <li>Nvidia Cuda, Tensorflow, PyTorch, Imaginaire</li>
                                <li>Data scrapping, Dataset Labeling, hyperparameter tuning</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Scripting</h3>
                            <ul className="ulelement">
                                <li>Bash</li>
                                <li>Powershell</li>
                                <li>Mysql</li>
                                <li>I0S</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 >Creativity</h2>
                    <ul className="ulskill">
                        <li>
                            <h3>3D</h3>
                            <ul className="ulelement">
                                <li>Blender, Autodesk Inventor, Autodesk Maya</li>
                                <li>3D Printing (PLA, TPU, ABS), Hotend switch, firmware flash</li>
                                <li>Unity, Video Mapping</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Image</h3>
                            <ul className="ulelement">
                                <li>Photography</li>
                                <li>Adobe Photoshop, Illustrator, Premiere</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Sound</h3>
                            <ul className="ulelement">
                                <li>Ableton</li>
                                <li>Midi Mapping</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        )
    }
}

export default Skills;