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
                    <span className="modaltitle">{this.props.modalTitle}</span>
                    <span className="close" onClick={this.props.handleModal}>&times;</span>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Modal;