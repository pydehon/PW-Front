import React from "react";
import '../styles/navbar.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="fixed">
                <ul>
                    <div className="leftpart">
                        <li><a href="#hello">Hello</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experiences">Experiences</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>
                    <div className="rightpart">
                        <li><a href="#login" onClick={this.props.handleModal}>Login</a></li>
                    </div>
                </ul>
            </div>
            )
    }
}

export default NavBar;