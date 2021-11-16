import React from "react";
import '../styles/modal.scss';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="modalroot">
                <div className="modalheader">
                    <span className="modaltitle">Login</span>
                    <span className="close" onClick={this.props.handleModal}>&times;</span>
                </div>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password"/>
                <input type="submit" value="Login" onClick={this.props.signin}/>
                <a onClick={this.props.pswdrecovery}>Forgot password?</a>
                <a onClick={this.props.signup}>You don't have yet an account? please sign up!</a>
            </div>
        )
    }
}

export default Modal;