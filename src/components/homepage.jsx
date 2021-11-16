import React from "react";
import '../styles/homepage.scss';
import NavBar from "./navbar";
import Hello from "./hello";
import Skills from "./skills";
import ScrollSnapArticle from "./scrollsnaparticle";
import ScrollSnapSection from "./scrollsnapsection";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";
import Modal from "./modal";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpened : false
        };
    }

    handleModal = () => {
        console.log("test")
        this.setState(prevState =>{
            return{
                modalOpened : !prevState.modalOpened
            }
        });
    }

    render() {
        return (
            <div>
                <NavBar ClassName="navbar" handleModal={this.handleModal}/>
                <ScrollSnapArticle>
                    <ScrollSnapSection>
                        <Hello />
                    </ScrollSnapSection>
                    <ScrollSnapSection>
                        <Skills />
                    </ScrollSnapSection>
                    <ScrollSnapSection>
                        <Experience />
                    </ScrollSnapSection>
                    <ScrollSnapSection>
                        <Education />
                    </ScrollSnapSection>
                    <ScrollSnapSection>
                        <Contact />
                    </ScrollSnapSection>
                </ScrollSnapArticle>
                { this.state.modalOpened ? <Modal handleModal={this.handleModal}/> : null }
            </div>
        )
    }
}

export default HomePage;