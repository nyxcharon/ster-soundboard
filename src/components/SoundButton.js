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
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <a onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={() => { this.handleMouseClick(this.props.soundURL) }}>
                            <span>
                                <img src={this.state.imgSrc} alt="" />
                            </span>
                        </a>
                        <p>{this.props.soundName}</p>
                    </div>
                </div>
            </div>
        )
    }
}

SoundButton.propTypes = {
    soundName: PropTypes.string.isRequired,
    soundURL: PropTypes.string.isRequired
}

export default SoundButton;