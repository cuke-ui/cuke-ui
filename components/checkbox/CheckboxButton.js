import React, { PureComponent } from "react";
import Checkbox from "./Checkbox";

export default class CheckboxButton extends PureComponent {
  render() {
    return <Checkbox {...this.props} isButton />;
  }
}
