import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Button from "../button";

export default class Pagination extends PureComponent {
  defaultCurrentPage = 1;
  typeConfig = {
    prev: "prev",
    next: "next"
  };
  state = {
    current:
      this.props.defaultCurrent || this.props.current || this.defaultCurrentPage
  };
  static defaultProps = {
    prefixCls: "cuke-pagination",
    current: "N/A",
    total: "N/A",
    separator: "/",
    locale: {
      prevText: "上一页",
      nextText: "下一页"
    },
    onChange: () => {}
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    separator: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    total: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired
    ]), //总数
    current: PropTypes.oneOfType([
      //当前索引
      PropTypes.number,
      PropTypes.string
    ]),
    defaultCurrent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    locale: PropTypes.object, //自定义按钮
    onChange: PropTypes.func //回调(type,current)
  };
  getPageList = type => {
    let { current } = this.state;
    const { prev } = this.typeConfig;
    const _current = type === prev ? --current : ++current;
    this.props.onChange(type, _current);
    this.setState({
      current: _current
    });
  };
  render() {
    const {
      prefixCls,
      total,
      separator,
      locale: { prevText, nextText },
      className,
      onChange, //eslint-disable-line
      ...attr
    } = this.props;
    const { prev, next } = this.typeConfig;
    const { current } = this.state;

    const isDisabledPrev = current <= this.defaultCurrentPage;
    const isDisabledNext = current >= total;

    return (
      <section className={cls(prefixCls, className)} {...attr}>
        <Button
          type={isDisabledPrev ? "default" : "primary"}
          disabled={isDisabledPrev}
          onClick={() => this.getPageList(prev)}
        >
          {prevText}
        </Button>
        <span className={`${prefixCls}-pages`}>
          <span className={`${prefixCls}-page-index`}>{current}</span>{" "}
          {separator} {total}
        </span>
        <Button
          type={isDisabledNext ? "default" : "primary"}
          disabled={isDisabledNext}
          onClick={() => this.getPageList(next)}
        >
          {nextText}
        </Button>
      </section>
    );
  }
  static getDerivedStateFromProps({ current }, state) {
    if (current !== state.current) {
      return {
        current: state.current
      };
    }
    return null;
  }
}
