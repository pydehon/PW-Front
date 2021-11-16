import React from "react";
import '../styles/scrollsnapsection.scss';

class ScrollSnapSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="snapsection">
                {this.props.children}
            </section>
        );
    }
}

export default ScrollSnapSection;