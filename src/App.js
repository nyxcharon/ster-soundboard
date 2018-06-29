import React, { Component } from 'react';
import { Howl,Howler } from 'howler';
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'
import '../node_modules/bulma/css/bulma.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="starB2.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Ster Soundboard</h1>
        </header>
        <div className="App-intro">
          <div className="container">
          <br></br>
          <div className="columns">

          <div className="column">
          <p>Go watch Ster on Twitch at <a href="https://www.twitch.tv/ster">https://www.twitch.tv/ster</a></p><br></br>
          <p>Soundboard Volume  </p>
          <VolumeSlider/>
          </div>
          </div>
            <div className="columns">
              <div className="column">
                <Sound soundName="FUCK" soundURL="fuck.mp3"  />
              </div>
              <div className="column">
                <Sound soundName="Undodgeable" soundURL="undodgeable.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Are you serious?" soundURL="areyouserious.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="What the fuck" soundURL="whatthefuck.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="[Cackaling]" soundURL="cackaling.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Can't Stop" soundURL="cantstopwontstop.mp3"/>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <Sound soundName="Corporations" soundURL="corporations.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Did you see that" soundURL="didyouseethat.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Dude you're nuts" soundURL="dudeyournuts.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Folder" soundURL="folder.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Fuck my ass" soundURL="fuckmyass.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Game Sux" soundURL="gamesux.mp3"/>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <Sound soundName="Hide the body" soundURL="hidethebody.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Jeff Why" soundURL="jeffwhy.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Just Stop" soundURL="juststop.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="[Moaning]" soundURL="moaning.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Nice" soundURL="nice.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Oh God" soundURL="ohgod.mp3"/>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <Sound soundName="Ohhhhh" soundURL="ohhh.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Pretty damn cool" soundURL="prettydamncool.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Reddit" soundURL="reddit.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="[Screaming]" soundURL="screaming.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Stop trying to fix It" soundURL="stoptellingmehowtofixit.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Streamer Sux" soundURL="streamersux.mp3"/>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <Sound soundName="Nice save" soundURL="thanksforsave.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Wahh" soundURL="wah.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Bad suggestions" soundURL="whyareyousuggestingthesethings.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Why" soundURL="why.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Why did I do that" soundURL="whydididothat.mp3"/>
              </div>
              <div className="column">
                <Sound soundName="Woo" soundURL="woo.mp3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Sound extends Component {
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
            <a  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={() => {this.handleMouseClick(this.props.soundURL)}}>
              <span>
              <img src={this.state.imgSrc} alt=""/>
              </span>
            </a>
            <p>{this.props.soundName}</p>
          </div>
        </div>
      </div>
    )
  }
}

Sound.defaultProps = {
  soundName: "SoundName",
  soundURL: 'fuck.mp3'
};

class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 50
    }
    Howler.volume(0.5)
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
    Howler.volume(value/100.0)
  }

  render() {
    let { volume } = this.state
    return (
      <Slider
        value={volume}
        orientation="horizontal"
        onChange={this.handleOnChange}
      />
    )
  }
}

export default App;
