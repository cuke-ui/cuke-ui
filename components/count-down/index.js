import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

const COUNT_DOWN_TYPE = {
  TIME: 'time',
  DATE: 'date'
}

const defaultCountDownDate = {
  d: 0,
  m: 0,
  h: 0,
  s: 0,
}

export default class CountDown extends PureComponent {
  static defaultProps = {
    prefixCls: 'cuke-count-down',
    defaultCountDown: 60,
    autoStart: false,
    interval: 1,     // 1000 ms
    disabled: false,
    type: COUNT_DOWN_TYPE.TIME
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultCountDown: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    countDown: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    interval: PropTypes.number,
    autoStart: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([
      COUNT_DOWN_TYPE.DATE,
      COUNT_DOWN_TYPE.TIME
    ])
  };

  state = {
    countDown: 0,
    countDownDate: defaultCountDownDate,
    autoStart: this.props.autoStart || !this.props.children,
  }

  timerId = null

  onStartCountDown = () => {
    if (this.props.disabled || this.state.countDown > 0) {
      return
    }
    this.setState({
      countDown: this.props.defaultCountDown || this.props.countDown,
    }, () => {
      const { onStart, type } = this.props
      if (onStart) {
        onStart(this.state.countDown)
      }
      if (type === COUNT_DOWN_TYPE.TIME) {
        return this.startCountDownForTime()
      }
      if (type === COUNT_DOWN_TYPE.DATE) {
        return this.startCountDownForDate()
      }
    })
  }

  startCountDownForDate = () => {
    const endTime = new Date(this.props.defaultCountDown || this.props.countDown).getTime()
    this.timerId = setTimeout(() => {
      this.setState((prevState) => {
        if (this.props.onChange) {
          this.props.onChange(prevState.countDownDate)
        }
        const nowTime = Date.now()
        let time = endTime - nowTime;

        const d = Math.floor(time / 1000 / 60 / 60 / 24);
        time -= d * 1000 * 60 * 60 * 24;
        const h = Math.floor(time / 1000 / 60 / 60);
        time -= h * 1000 * 60 * 60;
        const m = Math.floor(time / 1000 / 60);
        time -= m * 1000 * 60;
        const s = Math.floor(time / 1000);
        const countDownDate = {
          d: this.formatZero(d),
          h: this.formatZero(h),
          m: this.formatZero(m),
          s: this.formatZero(s)
        }
        if (time === 0) {
          clearTimeout(this.timerId)
          if (this.props.onEnd) {
            this.props.onEnd(prevState.countDownDate)
          }
          return {
            countDownDate: defaultCountDownDate,
          }
        }
        this.startCountDownForDate()
        return {
          countDownDate,
        }
      })
    }, this.props.interval * 1000)
  }

  startCountDownForTime = () => {
    this.timerId = setTimeout(() => {
      this.setState((prevState) => {
        if (this.props.onChange) {
          this.props.onChange(prevState.countDown)
        }
        if (prevState.countDown === 0) {
          clearTimeout(this.timerId)
          if (this.props.onEnd) {
            this.props.onEnd(prevState.countDown)
          }
          return {
            countDown: 0,
          }
        }
        this.startCountDownForTime()
        return {
          countDown: prevState.countDown - 1,
        }
      })
    }, this.props.interval * 1000)
  }

  formatDate = ({ d, h, m, s }) => {
    return `${d} 天 ${h} 时 ${m} 分 ${s} 秒`
  }

  formatZero = (time) => {
    if (time < 0) {
      return 0
    }
    return time < 10 ? `0${time}` : time
  }

  render() {
    const { countDown, countDownDate } = this.state
    const {
      disabled,
      children,
      className,
      prefixCls,
      style,
      type
    } = this.props;
    const btnDisabled = disabled || countDown > 0

    return (
      children ? (
        <span
          onClick={this.onStartCountDown}
          className={cls(prefixCls, className, {
            [`${prefixCls}-disabled`]: btnDisabled,
          })}
          style={style}
        >
          {this.props.children(type === COUNT_DOWN_TYPE.TIME ? countDown : countDownDate, btnDisabled)}
        </span>
      ) : (
          <span
            className={cls(prefixCls, className)}
            onClick={this.onStartCountDown}
            disabled={btnDisabled}
            style={style}
          >
            {type === COUNT_DOWN_TYPE.TIME ? countDown : this.formatDate(countDownDate)}
          </span>
        )
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.countDown !== nextProps.countDown && nextState.autoStart) {
      clearTimeout(this.timerId)
      this.onStartCountDown()
    }
  }

  componentDidMount() {
    if (this.state.autoStart) {
      this.onStartCountDown()
    }
  }
}
