import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

export default class Card extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-card",
    shadow: true,
    titleOverflowHidden: true
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    title: PropTypes.any,
    extra: PropTypes.any,
    shadow: PropTypes.bool,
    titleOverflowHidden: PropTypes.bool
  };

  render() {
    const {
      title,
      className,
      extra,
      prefixCls,
      style,
      shadow,
      titleOverflowHidden,
      ...attr
    } = this.props;

    return (
      <section
        className={cls(prefixCls, className, {
          [`${prefixCls}-shadow`]: shadow
        })}
        style={style}
        {...attr}
      >
        {(title || extra) && (
          <div className={cls(`${prefixCls}-header`)}>
            {title && (
              <div
                className={cls(`${prefixCls}-header-title`, {
                  [`${prefixCls}-overflow-hidden`]: titleOverflowHidden
                })}
              >
                {title}
              </div>
            )}
            {extra && (
              <div className={cls(`${prefixCls}-header-extra`)}>{extra}</div>
            )}
          </div>
        )}
        <div className={cls(`${prefixCls}-content`)}>{this.props.children}</div>
      </section>
    );
  }
}
