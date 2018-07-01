import React, { Component } from 'react';
import VolumeSlider from './components/VolumeSlider';
import SoundButton from './components/SoundButton';

import 'react-rangeslider/lib/index.css';
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
                <p>Go watch Ster on <i className="fab fa-twitch"></i> at <a href="https://www.twitch.tv/ster">https://www.twitch.tv/ster</a></p><br></br>
                <p>Soundboard Volume  </p>
                <VolumeSlider />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <SoundButton soundName="FUCK" soundURL="fuck.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Undodgeable" soundURL="undodgeable.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Are you serious?" soundURL="areyouserious.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="What the fuck" soundURL="whatthefuck.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="[Cackaling]" soundURL="cackaling.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Can't Stop" soundURL="cantstopwontstop.mp3" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <SoundButton soundName="Corporations" soundURL="corporations.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Did you see that" soundURL="didyouseethat.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Dude you're nuts" soundURL="dudeyournuts.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Folder" soundURL="folder.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Fuck my ass" soundURL="fuckmyass.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Game Sux" soundURL="gamesux.mp3" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <SoundButton soundName="Hide the body" soundURL="hidethebody.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Jeff Why" soundURL="jeffwhy.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Just Stop" soundURL="juststop.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="[Moaning]" soundURL="moaning.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Nice" soundURL="nice.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Oh God" soundURL="ohgod.mp3" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <SoundButton soundName="Ohhhhh" soundURL="ohhh.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Pretty damn cool" soundURL="prettydamncool.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Reddit" soundURL="reddit.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="[Screaming]" soundURL="screaming.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Stop trying to fix It" soundURL="stoptellingmehowtofixit.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Streamer Sux" soundURL="streamersux.mp3" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <SoundButton soundName="Nice save" soundURL="thanksforsave.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Wahh" soundURL="wah.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Bad suggestions" soundURL="whyareyousuggestingthesethings.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Why" soundURL="why.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Why did I do that" soundURL="whydididothat.mp3" />
              </div>
              <div className="column">
                <SoundButton soundName="Woo" soundURL="woo.mp3" />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with <i className="fas fa-heart"></i> by <a href="https://www.twitch.tv/nyxcharon">NyxCharon</a>
            </p>
            <p>
              Have an idea for a new sound? Make an issue < a href="https://github.com/nyxcharon/ster-soundboard/issues"> here </a> with a Twitch clip or Vod + timestamp
              </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
