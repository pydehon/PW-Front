import React from "react";
import '../styles/signup.scss';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="signupContainer">
                <p> 
                    You want to discover more services that I offer? Please signup to discover!
                </p>
                <input type="text" placeholder="Forname" />
                <input type="text" placeholder="Lastname" />
                <input type="mail" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
                <input className="signup" type="submit" value="Signup" onClick={this.props.handleSignup}/>
            </div>
        )
    }
}

export default Signup;