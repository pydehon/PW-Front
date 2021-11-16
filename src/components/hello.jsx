import React from "react";
import '../styles/hello.scss';
import profile from "../assets/images/profile.jpg"
import TypeWriter from "./typewriter";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="hello" className="container">
                <TypeWriter 
                    showCursor={true} 
                    sentences={[
                    "Hello! I'm Pierre-Yves! Nice to meet you!",
                    "I'm an experienced IT",
                    "I'm a FullStack Developer",
                    "I'm an active pedagogy teacher",
                    "I'm now available!",
                    "You want to know more? Scroll down to discover more!"]}
                    loopNumber={0}
                    delay={800}
                    blinkDelay={300}
                    typeDelay={100} />
                <div className="picture">
                    <img src={profile} alt="Pierre-Yves" width={720} height={749}/>
                </div>
            </div>
        )
    }
}

export default Hello;