import React from "react";

export default class CounterComponent extends React.Component {
  render() {
    const { minutes, seconds, hasEnded, hasStarted, otm } = this.props;

    const turnRed = minutes === 0 && seconds < 20 && hasStarted;
    const shouldBlink = hasStarted && turnRed && seconds <= 10;
    const v = minutes >= 0 && seconds > 0;
    const halfWay = v && (minutes * 60 + seconds) * 2 < otm * 60;
    return (
      <>
        <h3
          className="textLayOut"
          style={{
            visibility: !halfWay ? "hidden" : "visible",
          }}
        >
          More than halfway there!
        </h3>

        <h2
          className={`textLayOut countdownText  ${
            shouldBlink ? "countdownBlink" : ""
          } ${turnRed ? "textRed" : ""} `}
        >
          {hasStarted
            ? `${minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : seconds
              }`
            : !hasEnded
            ? `00:00`
            : `Time’s up!`}
        </h2>
      </>
    );
  }
}
