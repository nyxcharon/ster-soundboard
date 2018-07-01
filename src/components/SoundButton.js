import React, { Component } from 'react';
import { Howl } from 'howler';
import PropTypes from 'prop-types';

class SoundButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: 'starB.png',
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({
            imgSrc: 'starB2.png'
        });
    }

    handleMouseOut() {
        this.setState({
            imgSrc: 'starB.png'
        });
    }

    handleMouseClick(soundURL) {
        const sound = new Howl({
            src: [soundURL]
        });

        sound.play();
    }

    render() {
        return (
            <div className="">
            <div className="circle-button">
                <a onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={() => { this.handleMouseClick(this.props.soundURL) }}>
                   <img className="burger-pic" src={this.state.imgSrc} alt="" />
                </a>
            </div>
            <span className="tag is-info is-rounded is-medium circle-tag">  {this.props.soundName}</span>
          
            </div>
        )
    }
}

SoundButton.propTypes = {
    soundName: PropTypes.string.isRequired,
    soundURL: PropTypes.string.isRequired
}

export default SoundButton;