import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Spin from "../spin";

export default class Card extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-card",
    shadow: true,
    titleOverflowHidden: true,
    actions: [],
    showShadowWhenHover: false,
    cover: "",
    loading: false
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    title: PropTypes.any,
    extra: PropTypes.any,
    shadow: PropTypes.bool,
    titleOverflowHidden: PropTypes.bool,
    showShadowWhenHover: PropTypes.bool,
    cover: PropTypes.string,
    loading: PropTypes.bool,
    actions: PropTypes.array
  };

  render() {
    const {
      title,
      cover,
      className,
      extra,
      prefixCls,
      style,
      shadow,
      titleOverflowHidden,
      actions,
      showShadowWhenHover,
      loading,
      tip,
      ...attr
    } = this.props;

    return (
      <section
        className={cls(prefixCls, className, {
          [`${prefixCls}-shadow`]: shadow,
          [`${prefixCls}-hover`]: showShadowWhenHover,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-cover`]: cover
        })}
        style={style}
        {...attr}
      >
        <Spin spinning={loading} tip={tip}>
          {(title || extra) && (
            <div className={cls(`${prefixCls}-header`)}>
              {cover && (
                <div className={cls(`${prefixCls}-header-cover`)}>
                  <img src={cover} alt={title || cover} />
                </div>
              )}
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
          <div className={cls(`${prefixCls}-content`)}>
            {this.props.children}
          </div>
          {actions.length >= 1 && (
            <div className={cls(`${prefixCls}-actions`)}>
              {actions.map((action, key) => (
                <div key={key} className={cls(`${prefixCls}-actions-item`)}>
                  {action}
                </div>
              ))}
            </div>
          )}
        </Spin>
      </section>
    );
  }
}
