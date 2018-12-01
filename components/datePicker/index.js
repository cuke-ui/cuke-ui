import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import Spin from "../spin";
import moment from "moment";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import { DownIcon, ArrowLeftIcon, ArrowRightIcon } from "../icon";

export default class DataPicker extends PureComponent {
  state = {
    momentSelected: this.props.defaultValue || this.props.value || moment(),
    selectedDate: moment().date(),
    visible: null,
    isSelected: false,
    extraFooter: null,
    //第一次没选择日期 并且没有初始值 就显示 placeholder
    isSelectedMoment: !!(this.props.defaultValue || this.props.value)
  };
  static defaultProps = {
    prefixCls: "cuke-date-picker",
    format: "YYYY-MM-DD",
    onPanelVisibleChange: () => {},
    onChange: () => {},
    placeholder: "请选择",
    loading: false,
    showToday: true,
    showClear: true,
    tip: "",
    showDayInPrevMonth: true,
    showDayInNextMonth: true
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onPanelVisibleChange: PropTypes.func,
    onChange: PropTypes.func,
    format: PropTypes.string,
    loading: PropTypes.bool,
    showClear: PropTypes.bool,
    tip: PropTypes.any,
    showToday: PropTypes.bool,
    showDayInPrevMonth: PropTypes.bool,
    showDayInNextMonth: PropTypes.bool,
    overlay: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ])
  };
  constructor(props) {
    super(props);
    this.toggleContainer = createRef();
    this.panel = createRef();
  }
  static getDerivedStateFromProps({ value }, { momentSelected }) {
    if (!value || value.valueOf() === momentSelected.valueOf()) {
      return null;
    }
    return {
      momentSelected: value,
      isSelectedMoment: !!value,
      selectedDate: value.date()
    };
  }

  onTogglePanel = () => {
    const visible = !this.state.visible;
    this.setState({ visible }, () => {
      scrollIntoViewIfNeeded(this.panel.current, {
        scrollMode: "if-needed",
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    });
    this.props.onPanelVisibleChange(visible);
  };

  addMonth = () => {
    this.setState({
      momentSelected: this.state.momentSelected.clone().add(1, "months")
    });
  };

  subtractMonth = () => {
    this.setState({
      momentSelected: this.state.momentSelected.clone().add(-1, "months")
    });
  };

  selectedDate = date => () => {
    this.setState(
      {
        selectedDate: date,
        isSelected: true,
        momentSelected: this.state.momentSelected.clone().date(date),
        visible: false,
        isSelectedMoment: true
      },
      () => {
        this.props.onPanelVisibleChange(false);
        this.props.onChange(
          date,
          this.state.momentSelected,
          this.state.momentSelected.format(this.props.format)
        );
      }
    );
  };

  renderCalendarContent = () => {
    const momentDateFirst = this.state.momentSelected.clone().date(1);
    const daysInMonth = momentDateFirst.daysInMonth();
    const dayOfFirstDate = momentDateFirst.day();

    const momentLastMonth = momentDateFirst.clone().add(-1, "months");
    const lastMonthDaysInMonth = momentLastMonth.daysInMonth();

    const weekdayInMonth = momentDateFirst.isoWeekday();
    const lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % 7;

    return (
      <>
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
          <span
            className={cls(
              `${this.props.prefixCls}-item`,
              `${this.props.prefixCls}-day-title`
            )}
            key={day}
          >
            {day}
          </span>
        ))}

        {new Array(dayOfFirstDate).fill().map((_, index) => (
          <span
            className={cls(
              `${this.props.prefixCls}-item`,
              `${this.props.prefixCls}-last-month`
            )}
            key={`first-date-${index}`}
          >
            {this.props.showDayInPrevMonth &&
              lastMonthDaysInMonth - dayOfFirstDate + index + 1}
          </span>
        ))}

        {new Array(daysInMonth).fill().map((_, date) => (
          <span
            className={cls(
              `${this.props.prefixCls}-item`,
              `${this.props.prefixCls}-current-month`,
              {
                [`${this.props.prefixCls}-selected-date`]:
                  this.state.selectedDate === date + 1
              }
            )}
            key={`date-${date}`}
            onClick={this.selectedDate(date + 1)}
          >
            {date + 1}
          </span>
        ))}
        {this.props.showDayInNextMonth &&
          new Array(lastDaysInMonth === 0 ? 0 : 6 - lastDaysInMonth)
            .fill()
            .map((_, date) => (
              <span
                className={cls(
                  `${this.props.prefixCls}-item`,
                  `${this.props.prefixCls}-next-month`
                )}
                key={`placeholder-${date}`}
              >
                {" "}
                {date + 1}
              </span>
            ))}
      </>
    );
  };
  onSelectToday = () => {
    this.selectedDate(moment().date());
  };
  onClickOutsideHandler = e => {
    e.stopPropagation();
    if (
      this.state.visible &&
      !this.toggleContainer.current.contains(e.target)
    ) {
      this.setState({ visible: false });
      this.props.onPanelVisibleChange(false);
    }
  };
  clearDate = () => {
    const momentSelected = moment();
    const selectedDate = momentSelected.date();
    this.setState(
      {
        momentSelected,
        selectedDate,
        visible: false,
        isSelectedMoment: false
      },
      () => {
        this.props.onChange(undefined, undefined, "");
        this.props.onPanelVisibleChange(false);
      }
    );
  };
  render() {
    const { visible } = this.state;
    const {
      prefixCls,
      className,
      disabled,
      placeholder,
      format,
      extraFooter,
      showToday,
      showClear,
      tip,
      showDayInPrevMonth, //eslint-disable-line
      showDayInNextMonth, //eslint-disable-line
      loading, //eslint-disable-line
      onSelectedDateChange, //eslint-disable-line
      onPanelVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    const { momentSelected, isSelectedMoment } = this.state;

    return (
      <div
        className={cls(prefixCls, className)}
        {...attr}
        ref={this.toggleContainer}
      >
        <div
          className={cls(`${prefixCls}-inner`, {
            [`${prefixCls}-active`]: visible
          })}
        >
          <Input
            disabled={disabled}
            readonly
            placeholder={placeholder}
            className={cls(`${prefixCls}-input`)}
            value={isSelectedMoment ? momentSelected.format(format) : ""}
            onClick={disabled ? undefined : this.onTogglePanel}
          />
          <DownIcon className={`${prefixCls}-arrow`} />
        </div>
        <div
          className={cls(`${prefixCls}-content`, {
            [`${prefixCls}-open`]: visible,
            [`${prefixCls}-close`]: !visible,
            ["cuke-ui-no-animate"]: visible === null
          })}
          ref={this.panel}
        >
          <Spin size="large" spinning={loading} tip={tip}>
            <div className={cls(`${prefixCls}-header`)}>
              <span className={cls(`${prefixCls}-date`)}>
                {this.state.momentSelected.year()}年 {"  "}
                {this.state.momentSelected.month() + 1}月
              </span>
              <span className={cls(`${prefixCls}-switch`)}>
                <span
                  className={cls(`${prefixCls}-switch-group`)}
                  onClick={this.subtractMonth}
                >
                  <ArrowLeftIcon />
                </span>
                <span
                  className={cls(`${prefixCls}-switch-group`)}
                  onClick={this.addMonth}
                >
                  <ArrowRightIcon />
                </span>
              </span>
            </div>
            <div
              className={cls(`${prefixCls}-items`, {
                [`${prefixCls}-loading`]: loading
              })}
            >
              {this.renderCalendarContent()}
            </div>
            {extraFooter && (
              <div className={`${prefixCls}-footer-extra`}>{extraFooter}</div>
            )}
            {showToday || showClear ? (
              <div
                className={cls(`${prefixCls}-footer`, {
                  [`${prefixCls}-has-extra-footer`]: extraFooter,
                  [`${prefixCls}-has-border`]:
                    extraFooter || showToday || showClear
                })}
              >
                {showToday && (
                  <div
                    className={cls(`${prefixCls}-footer-today`)}
                    onClick={this.onSelectToday}
                  >
                    今天
                  </div>
                )}
                {showClear && (
                  <div
                    className={cls(`${prefixCls}-footer-clear`)}
                    onClick={this.clearDate}
                  >
                    清除
                  </div>
                )}
              </div>
            ) : (
              undefined
            )}
          </Spin>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler, false);
  }
  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler, false);
  }
}
