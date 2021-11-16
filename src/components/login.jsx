import React from "react";
import '../styles/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="loginContainer">
                <p>
                    Please signin to discover more!
                </p>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password"/>
                <input className="login" type="submit" value="Login" onClick={this.props.handleSignin}/>
                <a href="#recovery" onClick={this.props.handlePasswdRecovery}>Forgot password?</a>
                <a href="#signup" onClick={this.props.handleOpenSignupModal}>You don't have yet an account? please sign up!</a>
            </div>
        )
    }
}

export default Login;