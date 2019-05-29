import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import './index.less'

// TODO: 支持 type=date 时间倒计时

export default class CountDown extends PureComponent {
  static defaultProps = {
    prefixCls: 'cuke-count-down',
    defaultCountDown: 60,
    autoStart: false,
    interval: 1000,
    disabled: false,
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultCountDown: PropTypes.number,
    interval: PropTypes.number,
    autoStart: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  state = {
    countDown: 0,
    autoStart: this.props.autoStart || !this.props.children,
  }

  timerId = null

  onStartCountDown = () => {
    if (this.props.disabled || this.state.countDown > 0) {
      return
    }
    this.setState({
      countDown: this.props.defaultCountDown,
    }, () => {
      const { onStart } = this.props
      if (onStart) {
        onStart(this.state.countDown)
      }
      this.startCountDown()
    })
  }

  startCountDown = () => {
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
        this.startCountDown()
        return {
          countDown: prevState.countDown - 1,
        }
      })
    }, this.props.interval)
  }

  render() {
    const { countDown } = this.state
    const {
      disabled,
      children,
      className,
      prefixCls,
      style,
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
          {this.props.children(this.state.countDown, btnDisabled)}
        </span>
      ) : (
          <span
            className={cls(prefixCls, className)}
            onClick={this.onStartCountDown}
            disabled={btnDisabled}
            style={style}
          >
            {countDown}
          </span>
        )
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.defaultCountDown !== nextProps.defaultCountDown && nextState.autoStart) {
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
