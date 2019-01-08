import React, { Component } from "react";
import Progress from "../../components/progress";
import Button from "../../components/button";

export default class ProgressPage extends Component {
  state = {
    percent: 50,
    circlePercent: 20
  };
  render() {
    return (
      <>
        <div>
          <Progress percent={this.state.percent} animation={true} />
          <Button
            size="small"
            onClick={() => this.setState({ percent: this.state.percent - 3 })}
          >
            -
          </Button>
          <Button
            size="small"
            onClick={() => this.setState({ percent: this.state.percent + 3 })}
          >
            +
          </Button>
        </div>
        <div>
          <br />
          <br />
          <Progress percent={this.state.circlePercent} circle />
          <br />
          <br />
          <Button
            size="small"
            onClick={() =>
              this.setState({ circlePercent: this.state.circlePercent - 10 })
            }
          >
            -
          </Button>
          <Button
            size="small"
            onClick={() =>
              this.setState({ circlePercent: this.state.circlePercent + 10 })
            }
          >
            +
          </Button>
        </div>
      </>
    );
  }
}
