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
  it("should from 11 month => 10 month when last month button clicked", () => {
    const wrapper = shallow(<Calendar value={moment("2019-2-2")} />);
    wrapper
      .find(".cuke-calendar-last-month")
      .at(0)
      .simulate("click");
    expect(wrapper.state().momentSelected.month()).toEqual(1);
  });

  it("should render mini mode of calendar", () => {
    const wrapper = shallow(<Calendar miniMode />);
    assert(wrapper.find(".cuke-calendar-mini").length === 1);
  });

  it("should can find only one last month item when moment is 2019-01-03", () => {
    const wrapper = shallow(<Calendar defaultValue={moment("2019-01-03")} />);
    expect(wrapper.find(".cuke-calendar-last-month")).toHaveLength(1);
    wrapper.setProps({
      value: moment("2019-02-03")
    });
    expect(wrapper.find(".cuke-calendar-last-month")).toHaveLength(4);
  });

  it("should can find only three next month item when moment is 2019-01-03", () => {
    const wrapper = shallow(<Calendar defaultValue={moment("2019-01-03")} />);
    expect(wrapper.find(".cuke-calendar-next-month")).toHaveLength(3);
    wrapper.setProps({
      value: moment("2019-02-03")
    });
    expect(wrapper.find(".cuke-calendar-next-month")).toHaveLength(3);
  });

  it("should set last month moment when last button clicked", () => {
    const wrapper = shallow(<Calendar defaultValue={moment("2019-02-03")} />);
    wrapper
      .find(".cuke-calendar-button-icon")
      .at(0)
      .simulate("click");
    expect(wrapper.state().momentSelected.format("YYYY-MM-DD")).toEqual(
      "2019-01-03"
    );
  });

  it("should set next month moment when next button clicked", () => {
    const wrapper = shallow(<Calendar defaultValue={moment("2019-02-03")} />);
    wrapper
      .find(".cuke-calendar-button-icon")
      .at(1)
      .simulate("click");
    expect(wrapper.state().momentSelected.format("YYYY-MM-DD")).toEqual(
      "2019-03-03"
    );
  });
});
