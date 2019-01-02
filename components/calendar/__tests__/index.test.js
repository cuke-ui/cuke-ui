import moment from "moment";
import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Calendar from "../index";
import Button from "../../button";

describe("<Calendar/>", () => {
  it("should render a <Calendar/> components", () => {
    const wrapper = render(<Calendar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render find .cuke-calendar classnames", () => {
    const wrapper = shallow(<Calendar />);
    assert(wrapper.find(".cuke-calendar").length === 1);
  });
  it("should render find .cuke-calendar-loading classnames", () => {
    const wrapper = shallow(<Calendar loading tip="loading" />);
    assert(wrapper.find(".cuke-calendar-loading").length === 1);
  });

  it("should window cannot trigger click event when un mount", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Calendar />);
    wrapper.unmount();
    window.onclick = () => onClick;
    expect(onClick).not.toHaveBeenCalled();
  });
  it("should trigger onChange", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Calendar onChange={onChange} />);
    wrapper
      .find(".cuke-calendar-current-month")
      .at(0)
      .simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
  it("should trigger onMonthChange", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Calendar onMonthChange={onChange} />);
    wrapper
      .find(".cuke-calendar-button-icon")
      .at(0)
      .simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
  it("should set next day when current month button clicked", () => {
    const wrapper = shallow(<Calendar value={moment("1996-08-25")} />);
    wrapper
      .find(".cuke-calendar-current-month")
      .at(1)
      .simulate("click");
    setTimeout(() => {
      expect(wrapper.state().momentSelected.valueOf()).toEqual(
        moment("1996-08-24").valueOf()
      );
    });
  });
  it("should set next month when current month button clicked", () => {
    const wrapper = shallow(<Calendar value={moment("1996-08-25")} />);
    wrapper
      .find(".cuke-calendar-button-icon")
      .at(1)
      .simulate("click");
    setTimeout(() => {
      expect(wrapper.state().momentSelected.valueOf()).toBe(
        moment("1996-09-25").valueOf()
      );
    });
  });
  it("should render custom data", () => {
    const wrapper = shallow(
      <Calendar
        dateCellRender={() => {
          return <Button>购物</Button>;
        }}
      />
    );
    assert(wrapper.find(Button).length > 1);
  });
  it("should set new moment selected value when did update ", () => {
    const wrapper = shallow(<Calendar value={moment()} />);
    wrapper.setProps({
      value: moment("1996-08-25")
    });
    wrapper.update();
    expect(wrapper.state().momentSelected).toEqual(moment("1996-08-25"));
  });

  it("should set custom value", () => {
    const wrapper = shallow(<Calendar defaultValue={moment("1996-01-01")} />);
    expect(wrapper.state().momentSelected).toEqual(moment("1996-01-01"));
    wrapper.setProps({
      value: moment("1996-08-25")
    });
    wrapper.update();
    expect(wrapper.state().momentSelected).toEqual(moment("1996-08-25"));
  });

  it("should return moment when calendar change", () => {
    let _currentDate = null;
    let _date = null;
    const wrapper = shallow(
      <Calendar
        onChange={(currentDate, date) => {
          _currentDate = currentDate;
          _date = date;
        }}
      />
    );
    wrapper
      .find(".cuke-calendar-item")
      .at(10)
      .simulate("click");
    expect(typeof _currentDate).toEqual("number");
    expect(typeof _date).toEqual("object");
  });
});
