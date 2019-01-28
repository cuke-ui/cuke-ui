import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Select from "../select";
import Button from "../button";
import { ArrowLeftIcon, ArrowRightIcon } from "../icon";
import NumberInput from "../number-input";

const sizes = {
  small: "small",
  default: "default",
  large: "large"
};

export default class Pagination extends PureComponent {
  defaultCurrent = 1;
  defaultPageSize = 1;
  typeConfig = {
    prev: "prev",
    next: "next"
  };
  state = {
    current:
      this.props.defaultCurrent || this.props.current || this.defaultCurrent,
    pageSize:
      this.props.defaultPageSize || this.props.pageSize || this.defaultPageSize,
    quickJumperValue: ""
  };
  static defaultProps = {
    prefixCls: "cuke-pagination",
    current: 1,
    total: 1,
    separator: "/",
    locale: {
      prevText: <ArrowLeftIcon />,
      nextText: <ArrowRightIcon />
    },
    pageSize: 10,
    size: sizes.default,
    simple: false,
    showSizeChanger: false,
    onChange: () => {},
    onPageSizeChange: () => {},
    showTotal: () => {},
    pageSizeOptions: [10, 20, 30, 40],
    showQuickJumper: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    separator: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    total: PropTypes.number.isRequired, //总数
    current: PropTypes.number,
    pageSize: PropTypes.PropTypes.number,
    defaultCurrent: PropTypes.number,
    defaultPageSize: PropTypes.number,
    locale: PropTypes.object, //自定义按钮
    onChange: PropTypes.func, //回调(type,current)
    size: PropTypes.oneOf(Object.values(sizes)),
    showSizeChanger: PropTypes.bool,
    onPageSizeChange: PropTypes.func
  };
  static getDerivedStateFromProps({ current, pageSize }, state) {
    if (current !== state.current || pageSize !== state.pageSize) {
      return {
        current: state.current,
        pageSize: state.pageSize
      };
    }
    return null;
  }
  get pageCount() {
    return Math.ceil(this.props.total / this.state.pageSize);
  }
  get current() {
    return Math.min(this.state.current, this.pageCount);
  }
  onSimpleChange = type => () => {
    let { current } = this.state;
    const { prev } = this.typeConfig;
    const _current = type === prev ? --current : ++current;
    this.props.onChange(_current, this.state.pageSize);
    this.setState({
      current: _current
    });
  };
  onChange = page => () => {
    this.setState({
      current: page
    });
    this.props.onChange(page, this.state.pageSize);
  };
  onPageSizeChange = ({ key: pageSize }) => {
    this.setState({
      pageSize
    });

    this.props.onPageSizeChange(this.state.current, pageSize);
  };

  onQuickJumperKeyUp = e => {
    const page = Number(e.target.value);
    const current = Math.min(page, this.pageCount);
    if (e.keyCode === 13) {
      this.setState({
        current,
        quickJumperValue: ""
      });
      if (page <= this.pageCount && page !== this.state.current) {
        this.props.onChange(current, this.state.pageSize);
      }
    }
  };
  onQuickJumperChange = value => {
    this.setState({
      quickJumperValue: value
    });
  };
  render() {
    const {
      prefixCls,
      total,
      separator,
      locale: { prevText, nextText },
      className,
      size,
      showTotal,
      pageSize: _pageSize, //eslint-disable-line
      simple,
      showSizeChanger,
      pageSizeOptions,
      showQuickJumper,
      onPageSizeChange, //eslint-disable-line
      onChange, //eslint-disable-line
      ...attr
    } = this.props;
    const { prev, next } = this.typeConfig;
    const { current, pageSize, quickJumperValue } = this.state;

    const isDisabledPrev = simple
      ? current <= this.defaultCurrent
      : this.current <= this.defaultCurrent;
    const isDisabledNext = simple
      ? current >= total
      : this.current >= this.pageCount;

    if (simple) {
      return (
        <div
          className={cls(prefixCls, className, `${prefixCls}-simple`)}
          {...attr}
        >
          <Button
            type={isDisabledPrev ? "default" : "primary"}
            disabled={isDisabledPrev}
            onClick={this.onSimpleChange(prev)}
            size={sizes.small}
          >
            {prevText}
          </Button>
          <span className={`${prefixCls}-simple-pages`}>
            <span className={`${prefixCls}-simple-page-index`}>{current}</span>
            <span className={`${prefixCls}-simple-page-separator`}>
              {separator}
            </span>
            <span>{total}</span>
          </span>
          <Button
            type={isDisabledNext ? "default" : "primary"}
            disabled={isDisabledNext}
            size={sizes.small}
            onClick={this.onSimpleChange(next)}
          >
            {nextText}
          </Button>
        </div>
      );
    }

    return (
      <ul
        className={cls(prefixCls, className, {
          [`${prefixCls}-${size}`]: size
        })}
        {...attr}
      >
        <li className={`${prefixCls}-show-total`}>{showTotal(total)}</li>
        <li
          className={cls(`${prefixCls}-item`, `${prefixCls}-prev`, {
            [`${prefixCls}-item-${size}`]: size !== sizes.default,
            [`${prefixCls}-item-disabled`]: isDisabledPrev
          })}
          onClick={!isDisabledPrev ? this.onSimpleChange(prev) : undefined}
        >
          {prevText}
        </li>
        {new Array(this.pageCount).fill().map((_, index) => {
          const page = index + 1;
          return (
            <li
              className={cls(`${prefixCls}-item`, {
                [`${prefixCls}-item-selected`]: page === this.current,
                [`${prefixCls}-item-${size}`]: size !== sizes.default
              })}
              key={index}
              onClick={this.onChange(page)}
            >
              {page}
            </li>
          );
        })}
        <li
          className={cls(`${prefixCls}-item`, `${prefixCls}-next`, {
            [`${prefixCls}-item-${size}`]: size !== sizes.default,
            [`${prefixCls}-item-disabled`]: isDisabledNext
          })}
          onClick={!isDisabledNext ? this.onSimpleChange(next) : undefined}
        >
          {nextText}
        </li>

        {showSizeChanger && (
          <Select
            className={`${prefixCls}-size-changer`}
            popupContainerClassName={cls(
              `${prefixCls}-size-changer-container`,
              `${prefixCls}-size-changer-container-${size}`
            )}
            size={size}
            value={{ key: pageSize }}
            onChange={this.onPageSizeChange}
            labelInValue
          >
            {pageSizeOptions.map(pageSize => {
              return (
                <Select.Option value={pageSize} key={pageSize}>
                  {pageSize} 条 / 页
                </Select.Option>
              );
            })}
          </Select>
        )}

        {showQuickJumper && (
          <>
            <span>跳至</span>
            <NumberInput
              className={`${prefixCls}-quick-jumper`}
              onChange={this.onQuickJumperChange}
              value={quickJumperValue}
              min={1}
              size={size}
              onKeyUp={this.onQuickJumperKeyUp}
            />
            <span>页</span>
          </>
        )}
      </ul>
    );
  }
}
