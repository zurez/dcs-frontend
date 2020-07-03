import React, { Component } from "react";
import Layout from "./views/layout/layout";
import TimerContainer from "./views/timer/timer.container";

export default class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <TimerContainer />
        </Layout>
      </>
    );
  }
}
