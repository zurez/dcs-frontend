import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default class MinuteInputComponent extends Component {
  state = {};
  handleStartStop = () => {
    if (this.props.hasStarted) {
      this.props.stop();
    } else {
      this.props.play();
    }
  };
  render() {
    const { setMinutes, hasStarted, hasEnded, otm } = this.props;
    let stageOfTimer = "rest";
    if (hasStarted && !hasEnded) {
      stageOfTimer = "running";
    } else if (hasEnded && !hasStarted) {
      stageOfTimer = "stopped";
    }
    return (
      <ul>
        <li className="mrgnRight">Countdown: </li>
        <li className="custominput">
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={otm > 0 ? otm : ""}
            placeholder="&nbsp;(Min)"
            onChange={setMinutes}
            disabled={hasStarted}
            type="number"
            style={{ textAlign: "center" }}
          />
        </li>
        <li className="mrgnLeft">
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleStartStop}
          >
            {stageOfTimer === "running" ? `Stop` : `Start`}
          </Button>
        </li>
      </ul>
    );
  }
}
