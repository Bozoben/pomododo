import React, { Component } from 'react';
import './PomodoroTimer.css';
var moment = require('moment');

function durationAsString(aDuration) {
  // Le +100 sert à faire du padding ...
  var counterMinutes = '' + (aDuration.get('minutes') + 100) ;
  var counterSeconds = '' + (aDuration.get('seconds') + 100);
  return counterMinutes.substr(1) + ':' + counterSeconds.substr(1);
}

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {counterTime : moment.duration(this.props.maxTime)};
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.start = this.start.bind(this);
  }

  decrement() {
    var counterTime = this.state.counterTime;
    counterTime.subtract(1000);
    this.setState({counterTime});
  }

  reset() {
    this.setState({counterTime: moment.duration(this.props.maxTime)});
  }

  pause() {
       clearInterval(this.state.intervalId);
  }
  start() {
    var intervalId = setInterval(this.decrement, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }

  render() {
    const counterTime = durationAsString(this.state.counterTime);
    return (
      <div >
      <div className="pomodoroTimer" id="pomodoroTimer">{counterTime}</div>
      <br/>
      <div className="btn-grp">
      <button className="btn btn-success" onClick={this.start}>Start</button>
      <button className="btn btn-secondary" onClick={this.pause}>Stop</button>
      <button className="btn btn-info" onClick={this.reset}>Reset</button>
      </div>
      </div>
    );
  }
}

export default PomodoroTimer;
