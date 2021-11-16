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
            loginModalOpened : false,
            signupModalOpened : false
        };
    }

    handleLoginModal = () => {
        console.log("test")
        this.setState(prevState =>{
            return{
                loginModalOpened : !prevState.loginModalOpened
            }
        });
    }

    handleSignupModal = () => {
        console.log("test")
        this.setState(prevState =>{
            return{
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
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password"/>
                        <input type="submit" value="Login" onClick={this.props.signin}/>
                        <a onClick={this.props.pswdrecovery}>Forgot password?</a>
                        <a onClick={this.handleSignupModal}>You don't have yet an account? please sign up!</a>
                    </Modal> : null }
                { this.state.signupModalOpened ? <Modal modalTitle="Signup" handleModal={this.handleSignupModal}>
                        <input type="text" placeholder="Forname" />
                        <input type="text" placeholder="Lastname" />
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Type it again" />
                        <input type="submit" value="Signup" />
                </Modal> : null }
            </div>
        )
    }
}

export default HomePage;