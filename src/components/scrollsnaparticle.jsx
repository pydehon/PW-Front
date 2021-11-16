import React from "react";
import '../styles/scrollsnaparticle.scss';

class ScrollSnapArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <article className="snaparticle">
                {this.props.children}
            </article>
        );
    }
}

export default ScrollSnapArticle;