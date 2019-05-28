import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import './index.less'

// TODO: 支持 type=date 时间倒计时

class CountDown extends React.PureComponent {
  static defaultProps = {
    disabled: false,
    className: '',
    defaultCountDown: 60,
    autoStart: true,
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    defaultActiveKey: PropTypes.array,
    disabled: PropTypes.bool,
  };

  state = {
    countDown: 0,
    autoStart: !this.props.children,
  }

  timerId = null

  onStartCountDown = () => {
    if (this.props.disabled || this.state.countDown > 0) {
      return
    }
    this.setState({
      countDown: this.props.defaultCountDown,
    }, () => {
      const { onStartCountDown } = this.props
      if (onStartCountDown) {
        onStartCountDown()
      }
      this.startCountDown()
    })
  }

  startCountDown = () => {
    this.timerId = setTimeout(() => {
      this.setState((prevState) => {
        if (prevState.countDown === 0) {
          clearTimeout(this.timerId)
          return {
            countDown: 0,
          }
        }
        this.startCountDown()
        return {
          countDown: prevState.countDown - 1,
        }
      })
    }, 1000)
  }

  render() {
    const { countDown } = this.state
    const {
      disabled,
      children,
      className,
      prefixCls,
      ...attr
    } = this.props;
    const btnDisabled = disabled || countDown > 0
    return (
      children ? (
        <span
          onClick={this.onStartCountDown}
          className={cls(prefixCls, className, {
            [`${prefixCls}-disabled`]: btnDisabled,
          })}
          {...attr}
        >
          {this.props.children(this.state.countDown, btnDisabled)}
        </span>
      ) : (
        <span
          className={cls(prefixCls, className)}
          onClick={this.onStartCountDown}
          disabled={btnDisabled}
          {...attr}
        >
          {countDown}
        </span>
      )
    )
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  componentWillUpdate(nextProps, nextState){
    if(this.props.defaultCountDown !== nextProps.defaultCountDown && nextState.autoStart) {
      clearTimeout(this.timerId)
      this.onStartCountDown()
    }
  }

  componentDidMount(){
    if(this.state.autoStart) {
      this.onStartCountDown()
    }
  }
}

export default CountDown
