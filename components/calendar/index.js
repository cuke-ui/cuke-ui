import PropTypes from "prop-types";
import React from "react";
import cls from "classnames";
import moment from "moment";
import Spin from "../spin";
import { ArrowLeftIcon, ArrowRightIcon } from "../icon";

const CALENDAR_HEADERS = ["一", "二", "三", "四", "五", "六", "日"];
const WEEKDAY = 7;

export default class Calendar extends React.PureComponent {
  static defaultProps = {
    prefixCls: "cuke-calendar",
    loading: false,
    miniMode: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onMonthChange: PropTypes.func,
    dateCellRender: PropTypes.func,
    format: PropTypes.string,
    loading: PropTypes.bool,
    tip: PropTypes.any,
    miniMode: PropTypes.bool
  };

  static getDerivedStateFromProps({ value }, { momentSelected }) {
    if (value && !momentSelected.isSame(value)) {
      return {
        momentSelected: value
      };
    }
    return null;
  }

  state = {
    momentSelected: this.props.defaultValue || this.props.value || moment()
  };

  addMonth = () => {
    this.setState(
      { momentSelected: this.state.momentSelected.clone().add(1, "month") },
      () => {
        if (this.props.onMonthChange) {
          this.props.onMonthChange(this.state.momentSelected);
        }
      }
    );
  };

  subtractMonth = () => {
    this.setState(
      { momentSelected: this.state.momentSelected.clone().add(-1, "month") },
      () => {
        if (this.props.onMonthChange) {
          this.props.onMonthChange(this.state.momentSelected);
        }
      }
    );
  };
  selectedDate = date => isNextMonth => () => {
    let momentSelected = this.state.momentSelected.clone();

    if (isNextMonth === true) {
      momentSelected.add(1, "month").date(date);
    } else if (isNextMonth === false) {
      momentSelected.subtract(1, "month").date(date);
    } else {
      momentSelected.date(date);
    }
    this.setState(
      {
        momentSelected
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(date, this.state.momentSelected);
        }
      }
    );
  };
  renderCalendarContent = () => {
    const { prefixCls } = this.props;
    const momentDateFirst = this.state.momentSelected.clone().date(1);
    const daysInMonth = momentDateFirst.daysInMonth();
    const dayOfFirstDate = momentDateFirst.day();

    const weekdayInMonth = momentDateFirst.isoWeekday();
    const lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % WEEKDAY;

    const momentLastMonth = momentDateFirst.clone().add(-1, "months");
    const lastMonthDaysInMonth = momentLastMonth.daysInMonth();

    return (
      <>
        <div className={`${prefixCls}-day-header`}>
          {CALENDAR_HEADERS.map(day => (
            <span
              className={cls(`${prefixCls}-item`, `${prefixCls}-day-title`)}
              key={day}
            >
              {day}
            </span>
          ))}
        </div>

        <div className={`${prefixCls}-content`}>
          {new Array(weekdayInMonth - 1).fill().map((_, date) => {
            const currentDate =
              dayOfFirstDate === 0
                ? lastMonthDaysInMonth - WEEKDAY + date + 2
                : lastMonthDaysInMonth - dayOfFirstDate + date + 2;
            return (
              <span
                className={cls(`${prefixCls}-item`, `${prefixCls}-last-month`)}
                key={`first-date-${date}`}
                onClick={this.selectedDate(currentDate)(false)}
              >
                {currentDate}
                <div className={cls(`${prefixCls}-item-content`)}>
                  {this.props.dateCellRender &&
                    this.props.dateCellRender(
                      currentDate,
                      this.state.momentSelected.clone()
                    )}
                </div>
              </span>
            );
          })}

          {new Array(daysInMonth).fill(null).map((_, date) => (
            <span
              className={cls(
                `${prefixCls}-item`,
                `${prefixCls}-current-month`,
                {
                  [`${prefixCls}-selected-date`]:
                    this.state.momentSelected.date() === date + 1
                }
              )}
              key={`date-${date}`}
              onClick={this.selectedDate(date + 1)()}
            >
              {date + 1}
              <div className={cls(`${prefixCls}-item-content`)}>
                {this.props.dateCellRender &&
                  this.props.dateCellRender(
                    date + 1,
                    this.state.momentSelected.clone()
                  )}
              </div>
            </span>
          ))}

          {new Array(lastDaysInMonth === 0 ? 0 : 7 - lastDaysInMonth)
            .fill(null)
            .map((_, date) => (
              <span
                className={cls(`${prefixCls}-item`, `${prefixCls}-next-month`)}
                key={`next-date-${date}`}
                onClick={this.selectedDate(date + 1)(true)}
              >
                {date + 1}
              </span>
            ))}
        </div>
      </>
    );
  };
  render() {
    const {
      className,
      loading,
      prefixCls,
      tip,
      onMonthChange, //eslint-disable-line
      dateCellRender, //eslint-disable-line
      miniMode,
      ...attr
    } = this.props;
    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-mini`]: miniMode
        })}
        {...attr}
      >
        <Spin spinning={loading} tip={tip} size="large">
          <div className={cls(`${prefixCls}-header`)}>
            <ArrowLeftIcon
              className={`${prefixCls}-button-icon`}
              onClick={this.subtractMonth}
            />
            <span className={cls(`${prefixCls}-date`)}>
              {this.state.momentSelected.year()}年 {"  "}
              {this.state.momentSelected.month() + 1}月
            </span>
            <ArrowRightIcon
              className={`${prefixCls}-button-icon`}
              onClick={this.addMonth}
            />
          </div>
          <div
            className={cls(`${prefixCls}-list`, {
              [`${prefixCls}-loading`]: loading
            })}
          >
            {this.renderCalendarContent()}
          </div>
        </Spin>
      </div>
    );
  }
}
