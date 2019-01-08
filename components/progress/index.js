import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

const types = ["default", "warning", "success", "error", "progress"];

export default class Progress extends PureComponent {
  state = {
    percent: 0
  };
  static defaultProps = {
    prefixCls: "cuke-progress",
    type: "default",
    percent: 0,
    animation: false,
    showInfo: true,
    circle: false,
    width: 100 // 环形进度条 svg 的宽度
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    animation: PropTypes.bool,
    circle: PropTypes.bool,
    percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.oneOf(types),
    format: PropTypes.func
  };
  static getDerivedStateFromProps({ percent }, state) {
    if (percent && percent !== state.percent) {
      return {
        percent: Math.max(0, Math.min(100, percent))
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
  }
  getStrokeDasharray = (percent = 0.8, r = 50) => {
    const perimeter = parseFloat(Math.PI * 2 * r, 2); // 周长
    return `${perimeter * percent} ${perimeter * (1 - percent)}`;
  };
  render() {
    const {
      prefixCls,
      type,
      animation,
      className,
      showInfo,
      circle,
      width,
      format,
      ...attr
    } = this.props;

    const { percent } = this.state;
    const defaultPercent = `${percent}%`;

    if (circle) {
      const cx = width / 2;
      const cy = width / 2;
      const r = width / 2 - 3;
      return (
        <div
          className={cls(
            `${prefixCls}-circle-wrapper`,
            className,
            `${prefixCls}-${type}`
          )}
          {...attr}
        >
          <svg
            width={width}
            height={width}
            viewBox={`0 0 ${width} ${width}`}
            className={`${prefixCls}-circle`}
          >
            <circle
              cx={cx}
              cy={cy}
              r={r}
              className={`${prefixCls}-circle-bg`}
            />
            <circle
              cx={cx}
              cy={cy}
              r={r}
              className={`${prefixCls}-circle-stroke`}
              className={`${prefixCls}-circle-stroke-${type}`}
              strokeDasharray={this.getStrokeDasharray(percent / 100, r)}
            />
          </svg>
          <div className={`${prefixCls}-circle-percent`}>
            {(format && format(percent)) || defaultPercent}
          </div>
        </div>
      );
    }
    return (
      <div
        className={cls(prefixCls, className, `${prefixCls}-${type}`)}
        {...attr}
      >
        <div className={`${prefixCls}-enter`}>
          <div
            className={cls(`${prefixCls}-bg`, {
              [`${prefixCls}-bg-animation`]: animation
            })}
            style={{ width: defaultPercent }}
          />
        </div>
        {showInfo && <div className={`${prefixCls}-num`}>{defaultPercent}</div>}
      </div>
    );
  }
}
