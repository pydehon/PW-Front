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
import Login from "./login";
import Signup from "./signup";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModalOpened : false,
            signupModalOpened : false
        };
    }

    handleLoginModal = () => {
        this.setState(prevState =>{
            return{
                loginModalOpened : !prevState.loginModalOpened
            }
        });
    }

    handleOpenSignupModal = () => {
        this.setState(prevState =>{
            return{
                loginModalOpened : false,
                signupModalOpened : !prevState.signupModalOpened
            }
        });
    }

    render() {
        return (
            <div>
                <NavBar ClassName="navbar" handleLoginModal={this.handleLoginModal}/>
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
                { this.state.loginModalOpened ? <Modal modalTitle="Login" handleModal={this.handleLoginModal}>
                        <Login handleOpenSignupModal={this.handleOpenSignupModal}/>
                    </Modal> : null }
                { this.state.signupModalOpened ? <Modal modalTitle="Signup" handleModal={this.handleOpenSignupModal}>
                        <Signup />
                </Modal> : null }
            </div>
        )
    }
}

export default HomePage;