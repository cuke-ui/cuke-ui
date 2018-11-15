import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Input from "../input";
import moment from "moment";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";
import { DownIcon, LoadingIcon, ArrowLeftIcon, ArrowRightIcon } from "../icon";

export default class DataPicker extends PureComponent {
  state = {
    momentSelected: this.props.defaultValue || this.props.value || moment(),
    selectedDate: moment().date(),
    visible: null,
    isSelected: false,
    extraFooter: null
  };
  static defaultProps = {
    prefixCls: "cuke-date-picker",
    format: "YYYY-MM-DD",
    onPanelVisibleChange: () => {},
    onChange: () => {},
    loading: false,
    showToday: true
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    onPanelVisibleChange: PropTypes.func,
    onChange: PropTypes.func,
    format: PropTypes.string,
    loading: PropTypes.bool,
    showToday: PropTypes.bool,
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
    return { momentSelected: value };
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

  onChange = value => {
    this.setState({ selectedValue: value });
    this.props.onChange(value);
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

  selectedDate = date => {
    this.setState(
      {
        selectedDate: date,
        isSelected: true,
        momentSelected: this.state.momentSelected.clone().date(date),
        visible: false
      },
      () => {
        this.props.onPanelVisibleChange(true);
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

    if (this.props.loading) {
      return (
        <LoadingIcon className={cls(`${this.props.prefixCls}-loading-icon`)} />
      );
    } else {
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
              {lastMonthDaysInMonth - dayOfFirstDate + index + 1}
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
              onClick={() => this.selectedDate(date + 1)}
            >
              {date + 1}
            </span>
          ))}
        </>
      );
    }
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
      loading, //eslint-disable-line
      onSelectedDateChange, //eslint-disable-line
      onPanelVisibleChange, //eslint-disable-line
      ...attr
    } = this.props;

    const { momentSelected } = this.state;

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
            value={momentSelected.format(format)}
            onClick={this.onTogglePanel}
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
          <div className={cls(`${prefixCls}-header`)}>
            <span className={cls(`${prefixCls}-date`)}>
              {this.state.momentSelected.year()} {"  "}
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
          {extraFooter ||
            (showToday && (
              <div
                className={cls(`${prefixCls}-footer`, {
                  [`${prefixCls}-has-extra-footer`]: extraFooter,
                  [`${prefixCls}-has-border`]: extraFooter || showToday
                })}
              >
                {extraFooter}
                {showToday && (
                  <div
                    className={cls(`${prefixCls}-footer-today`)}
                    onClick={this.onSelectToday}
                  >
                    今天
                  </div>
                )}
              </div>
            ))}
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
