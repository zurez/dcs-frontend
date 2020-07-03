import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import FastForwardSharpIcon from "@material-ui/icons/FastForwardSharp";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import { IconButton } from "@material-ui/core";
import PauseCircleOutlineSharpIcon from "@material-ui/icons/PauseCircleOutlineSharp";
import PlayCircleOutlineSharpIcon from "@material-ui/icons/PlayCircleOutlineSharp";
export default class ControlsComponent extends Component {
  state = {
    paused: false,
  };

  handleSpeedChange = (speed) => {
    this.props.speed(speed);
  };
  playPauseHandler = () => {
    if (this.state.paused) {
      this.props.play();
    } else {
      this.props.pause();
    }
    this.setState({ paused: !this.state.paused });
  };
  render() {
    const { paused } = this.state;
    const { hasStarted, selectedSpeed } = this.props;

    return (
      <>
        <IconButton
          style={{
            visibility: hasStarted ? "visible" : "hidden",
          }}
          className="textLayOut playPauseButton textRed"
          onClick={this.playPauseHandler}
        >
          {paused ? (
            <PlayCircleOutlineSharpIcon />
          ) : (
            <PauseCircleOutlineSharpIcon />
          )}
        </IconButton>

        <ul>
          <li>
            <Button
              variant={selectedSpeed === 1 ? "contained" : "outlined"}
              color="secondary"
              onClick={() => this.handleSpeedChange(1)}
            >
              1x
            </Button>
          </li>
          <li>
            <Button
              startIcon={<PlayArrowSharpIcon />}
              variant={selectedSpeed === 1.5 ? "contained" : "outlined"}
              color="secondary"
              onClick={() => this.handleSpeedChange(1.5)}
            >
              1.5x
            </Button>
          </li>
          <li>
            <Button
              startIcon={<FastForwardSharpIcon />}
              variant={selectedSpeed === 2 ? "contained" : "outlined"}
              color="secondary"
              onClick={() => this.handleSpeedChange(2)}
            >
              2x
            </Button>
          </li>
        </ul>
      </>
    );
  }
}
