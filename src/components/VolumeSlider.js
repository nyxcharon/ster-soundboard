import React, { Component } from 'react'
import { Howler } from 'howler'
import Slider from 'react-rangeslider'

class VolumeSlider extends Component {
  constructor (props, context) {
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
        Howler.volume(value / 100.0)
    }

  render () {
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

export default VolumeSlider
