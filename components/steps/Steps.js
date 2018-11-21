import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Spin from "../spin";

import { LoadingIcon, SuccessIcon, ErrorIcon } from "../icon";

const statusConfig = {
  wait: "wait",
  process: "process",
  error: "error",
  done: "done"
};

export default class Steps extends PureComponent {
  state = {
    current: 0
  };
  static defaultProps = {
    prefixCls: "cuke-steps",
    current: 0,
    onChange: () => {},
    showProcessSpin: true
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    description: PropTypes.any,
    title: PropTypes.any,
    icon: PropTypes.any,
    status: PropTypes.string,
    showProcessSpin: PropTypes.bool
  };
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps({ current }, state) {
    if (current !== state.current) {
      return {
        current
      };
    }
    return null;
  }

  renderStatusIcon(status) {
    switch (status) {
      case statusConfig["wait"]:
        return <SuccessIcon />;
      case statusConfig["process"]:
        return <LoadingIcon />;
      case statusConfig["error"]:
        return <ErrorIcon />;
      case statusConfig["done"]:
        return <SuccessIcon />;
      default:
        return <SuccessIcon />;
    }
  }

  render() {
    const {
      prefixCls,
      className,
      children,
      current,
      icon: stepsIcon,
      status: stepsStatus,
      showProcessSpin,
      ...attr
    } = this.props;

    const content = React.Children.map(children, (element, index) => {
      return cloneElement(element, {
        visible: this.state.current === index,
        key: index
      });
    });

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <div className={cls(`${prefixCls}-header`)} ref={this.tabsHeader}>
          {React.Children.map(
            children,
            ({ props: { title, description, status, icon } }, index) => {
              const isDone =
                stepsStatus === statusConfig["done"] ||
                status === statusConfig["done"] ||
                index < current;
              const isProcess =
                stepsStatus === statusConfig["process"] ||
                status === statusConfig["process"] ||
                index === current;
              const isWait =
                stepsStatus === statusConfig["wait"] ||
                status === statusConfig["wait"] ||
                index > current;

              const hasCustomStatus =
                !!(stepsStatus || status) && index === current;

              return (
                <div
                  key={index}
                  role="step"
                  aria-selected={true}
                  className={cls(`${prefixCls}-step`, {
                    [`${prefixCls}-step-active`]: current === index,
                    [`${prefixCls}-step-done`]: isDone,
                    [`${prefixCls}-step-wait`]: isWait,
                    [`${prefixCls}-step-process`]: isProcess,
                    [`${prefixCls}-step-${stepsStatus ||
                      status}`]: hasCustomStatus
                  })}
                >
                  <div className={cls(`${prefixCls}-step-icon`)}>
                    {isDone &&
                      (stepsIcon ||
                        icon ||
                        (hasCustomStatus ? (
                          this.renderStatusIcon(stepsStatus || status)
                        ) : (
                          <SuccessIcon />
                        )))}
                    {isProcess &&
                      (stepsIcon ||
                        icon ||
                        (hasCustomStatus ? (
                          this.renderStatusIcon(stepsStatus || status)
                        ) : showProcessSpin ? (
                          <Spin />
                        ) : (
                          <LoadingIcon />
                        )))}
                    {isWait &&
                      (stepsIcon ||
                        icon ||
                        (hasCustomStatus ? (
                          this.renderStatusIcon(stepsStatus || status)
                        ) : (
                          <SuccessIcon />
                        )))}
                  </div>
                  <div className={cls(`${prefixCls}-step-content`)}>
                    <div
                      className={cls(`${prefixCls}-step-content-title`, {
                        [`${prefixCls}-no-description`]: !description
                      })}
                    >
                      {title}
                    </div>
                    {description && (
                      <p
                        className={cls(`${prefixCls}-step-content-description`)}
                      >
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className={cls(`${prefixCls}-content`)}>{content}</div>
      </div>
    );
  }
}
