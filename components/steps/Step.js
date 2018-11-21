import React, { PureComponent } from "react";
import cls from "classnames";

class Step extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-step"
  };

  render() {
    const { prefixCls, className, children, visible, ...attr } = this.props;
    if (!visible || !children) {
      return null;
    }
    return (
      <div className={cls(prefixCls, className)} {...attr}>
        {children}
      </div>
    );
  }
}

export default Step;
