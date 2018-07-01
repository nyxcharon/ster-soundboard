import React, { Component } from 'react';
import VolumeSlider from './components/VolumeSlider';
import SoundButton from './components/SoundButton';
import { getSoundList } from './mockAPI.js';

import 'react-rangeslider/lib/index.css';
import '../node_modules/bulma/css/bulma.css';
import './App.css';


class App extends Component {
  render() {
    let table = []
    let sounds = getSoundList()
    let soundChunks = sounds.chunk(6)
    for (let i = 0; i < soundChunks.length; i++) {
      let children = []
      for (let j = 0; j < soundChunks[i].length; j++) {
        let s = soundChunks[i][j]
        children.push(<div className="column" key={s.soundName}><SoundButton soundName={s.soundName} soundURL={s.soundURL} /></div>)
      }
      table.push(<div className="columns" key={i}>{children}</div>)
    }

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
            {table}
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

// eslint-disable-next-line 
Array.prototype.chunk = function (groupsize) {
  var sets = [], chunks, i = 0;
  chunks = this.length / groupsize;

  while (i < chunks) {
    sets[i] = this.splice(0, groupsize);
    i++;
  }

  return sets;
};