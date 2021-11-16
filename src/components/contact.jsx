import React from "react";
import '../styles/contact.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="contactroot">
                <h1 id="contact">Contact</h1>
                <p>Feel free to send me a message!</p>
                <div>
                    <input className="email" type="text" placeholder="email" />
                    <textarea className="message" placeholder="Type your message here"/>
                    <input className="send" type="submit" value="Send"/>
                </div>
            </div>
        )
    }
}

export default Contact;