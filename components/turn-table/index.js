import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import ReactTurntable from "react-turntable";

export default class TurnTable extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-turn-table",
    width: 500,
    height: 500,
    speed: 1000, //旋转速度
    duration: 5000, //旋转时间
    prizes: [],
    clickText: "抽奖",
    primaryColor: "#2f363d",
    secondaryColor: "#EEC775",
    fontStyle: {
      color: "#fff",
      size: "14px",
      fontWeight: "bold",
      fontVertical: false,
      fontFamily: "Microsoft YaHei"
    }
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    prizes: PropTypes.array.isRequired,
    clickText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    speed: PropTypes.number,
    duration: PropTypes.number,
    onComplete: PropTypes.func,
    onStart: PropTypes.func,
    fontVertical: PropTypes.bool,
    fontStyle: PropTypes.object
  };

  render() {
    const { prefixCls, className, ...attr } = this.props;

    return <ReactTurntable className={cls(prefixCls, className)} {...attr} />;
  }
}
