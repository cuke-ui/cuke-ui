import React, { PureComponent } from "react";
import Checkbox from "./Checkbox";

export default class CheckboxButton extends PureComponent {
  static defaultProps = {
    isButton: true
  };
  render() {
    return <Checkbox {...this.props} />;
  }
}
