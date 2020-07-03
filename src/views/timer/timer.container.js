import React from "react";

import CounterComponent from "./components/counter.component";
import ControlsComponent from "./components/controls.component";
import MinuteInputComponent from "./components/minuteInput.component";

const initialState = {
  selectedSpeed: 1,
  otm: 0,
  minutes: 0,
  seconds: 0,
  hasEnded: false,
  hasStarted: false,
};
export default class Countdown extends React.Component {
  state = initialState;

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  intervalHandler = () => {
    const { minutes, seconds } = this.state;
    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
    } else if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(this.interval);
        this.setState({ ...initialState, hasEnded: true });
      } else {
        this.setState({
          seconds: 59,
          minutes: minutes - 1,
        });
      }
    }
  };
  pause = () => {
    clearInterval(this.interval);
  };
  play = () => {
    const { selectedSpeed, minutes, seconds } = this.state;
    if (selectedSpeed < 1 || (minutes === 0 && seconds === 0)) {
      return;
    }
    this.setState({ hasEnded: false, hasStarted: true }, () => {
      this.interval = setInterval(this.intervalHandler, 1000 / selectedSpeed);
    });
  };
  speed = (selectedSpeed) => {
    if (!this.state.hasStarted) {
      return;
    }
    this.setState({ selectedSpeed }, () => {
      this.pause();
      this.play();
    });
  };

  stop = () => {
    this.pause();
    this.setState(initialState);
  };
  setMinutes = (e) => {
    let minutes = parseInt(e.target.value);

    if (!e || isNaN(minutes) || !Number.isInteger(minutes) || minutes < 0) {
      minutes = 0;
    }
    this.setState({
      minutes: minutes,
      otm: minutes,
      seconds: 0,
      hasEnded: false,
      hasStarted: false,
    });
  };
  render() {
    const {
      minutes,
      seconds,
      hasEnded,
      hasStarted,
      selectedSpeed,
      otm,
    } = this.state;

    return (
      <div className="formcontainer">
        <div className="formwrap">
          <MinuteInputComponent
            setMinutes={this.setMinutes}
            play={this.play}
            stop={this.stop}
            hasStarted={hasStarted}
            hasEnded={hasEnded}
            otm={otm}
          />
          <CounterComponent
            minutes={minutes}
            seconds={seconds}
            hasEnded={hasEnded}
            hasStarted={hasStarted}
            otm={otm}
          />
          <ControlsComponent
            speed={this.speed}
            play={this.play}
            pause={this.pause}
            hasStarted={hasStarted}
            selectedSpeed={selectedSpeed}
          />
        </div>
      </div>
    );
  }
}
