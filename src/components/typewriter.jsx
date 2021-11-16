import React from "react";
import '../styles/typewriter.scss';

class TypeWriter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCursor: props.showCursor,
            sentences: props.sentences,
            countSentence: 0,
            typedText: "",
            action: "typing",
            loopNumber: props.loopNumber,
            loopCount: 0,
            delay: props.delay,
            blinkDelay: props.blinkDelay,
            typeDelay: props.typeDelay
        };
    }

    componentDidMount() {
        setInterval(this.blinkCursor, this.state.blinkDelay);
        setInterval(this.typeText, this.state.typeDelay);
    }

    typeText = () => {
        if (this.state.action === "typing") {
            if (this.state.typedText === this.state.sentences[this.state.countSentence]) {
                setTimeout( () => {
                    this.setState(prevState =>{
                    return{
                        typedText : prevState.typedText.slice(0, prevState.typedText.length-1),
                        action: "erasing"
                    }});
                }, this.state.delay);
            } else {
                this.setState(prevState =>{
                    return{
                        typedText : prevState.typedText + prevState.sentences[prevState.countSentence].slice(prevState.typedText.length,prevState.typedText.length+1),
                        action: "typing"
                    }
                });
            }
        } else if (this.state.action === "erasing"){
            if(this.state.typedText.length === 0) {
                if(this.state.countSentence === this.state.sentences.length-1){
                    this.setState(prevState =>{
                        return{
                            countSentence : 0,
                            typedText : prevState.typedText + prevState.sentences[0].slice(0,1),
                            action : "typing"
                        }
                    })
                } else {
                    this.setState(prevState =>{
                        return{
                            countSentence : prevState.countSentence + 1,
                            typedText : prevState.typedText + prevState.sentences[prevState.countSentence +1].slice(0,1),
                            action : "typing"
                        }
                    })
                }
            } else {
                this.setState(prevState =>{
                    return{
                        typedText : prevState.typedText.slice(0, prevState.typedText.length-1),
                        action : "erasing"
                    }
                })
            }
        }
    }

    blinkCursor = () => {
        this.setState((prevState) => ({
            showCursor : !prevState.showCursor
        }))
    }

    render() {
        let display = this.state.showCursor ? "|" : " ";
        return (
            <div className="typewriter">
                <div className="textcontainer">
                    <span className="typed">{this.state.typedText}</span>
                    <span className="cursor">{display}</span>
                </div>
            </div>
        )
    }
}

export default TypeWriter;