import React, { PureComponent } from "react";
import Radio from "./Radio";

export default class RadioButton extends PureComponent {
  static defaultProps = {
    isButton: true
  };
  render() {
    return <Radio {...this.props} />;
  }
}
