import PropTypes from "prop-types";
import React from "react";
import cls from "classnames";
import moment from "moment";
import Spin from "../spin";
import { ArrowLeftIcon, ArrowRightIcon } from "../icon";

export default class Calendar extends React.PureComponent {
  static defaultProps = {
    prefixCls: "cuke-calendar",
    loading: false
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onMonthChange: PropTypes.func,
    dateCellRender: PropTypes.func,
    format: PropTypes.string,
    loading: PropTypes.bool,
    tip: PropTypes.any
  };

  static getDerivedStateFromProps({ value }, { momentSelected }) {
    if (!value || value.valueOf() === momentSelected.valueOf()) {
      return null;
    }
    return { momentSelected: value, selectedDate: value.date() };
  }

  state = {
    momentSelected: this.props.defaultValue || this.props.value || moment(),
    selectedDate: moment().date()
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
  selectedDate = date => () => {
    this.setState(
      {
        selectedDate: date,
        momentSelected: this.state.momentSelected.clone().date(date)
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

    const weekdayInMonth = momentDateFirst.isoWeekday();
    const lastDaysInMonth = (daysInMonth + weekdayInMonth - 1) % 7;

    return (
      <>
        <div className={`${prefixCls}-day-header`}>
          {["一", "二", "三", "四", "五", "六", "日"].map(day => (
            <span
              className={cls(`${prefixCls}-item`, `${prefixCls}-day-title`)}
              key={day}
            >
              {day}
            </span>
          ))}
        </div>

        <div className={`${prefixCls}-content`}>
          {new Array(weekdayInMonth - 1).fill(null).map((_, index) => (
            <span
              className={cls(`${prefixCls}-item`)}
              key={`first-date-${index}`}
            />
          ))}

          {new Array(daysInMonth).fill(null).map((_, date) => (
            <span
              className={cls(
                `${prefixCls}-item`,
                `${prefixCls}-current-month`,
                {
                  [`${prefixCls}-selected-date`]:
                    this.state.selectedDate === date + 1
                }
              )}
              key={`date-${date}`}
              onClick={this.selectedDate(date + 1)}
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
                key={`placeholder-${date}`}
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
      dateCellRender, //eslint-disable-line
      ...attr
    } = this.props;
    return (
      <div className={cls(prefixCls, className)} {...attr}>
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
