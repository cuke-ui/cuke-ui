import moment from "moment";
import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import DatePicker from "../index";
import Button from "../../button";

describe("<DatePicker/>", () => {
  it("should render a <DatePicker/> components", () => {
    const wrapper = render(<DatePicker />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render custom size", () => {
    const wrapper = render(
      <div>
        <DatePicker placeholder="small" size="small" />
        <DatePicker placeholder="default" />
        <DatePicker placeholder="large" size="large" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render find .cuke-date-picker classnames", () => {
    const wrapper = shallow(<DatePicker />);
    assert(wrapper.find(".cuke-date-picker").length === 1);
  });
  it("should render find .cuke-date-picker-loading classnames", () => {
    const wrapper = shallow(<DatePicker loading />);
    assert(wrapper.find(".cuke-date-picker-loading").length === 1);
  });
  it("should render today button", () => {
    const wrapper = shallow(<DatePicker />);
    assert(wrapper.find(".cuke-date-picker-footer-today").length === 1);
  });
  it("should cannot render today button", () => {
    const wrapper = shallow(<DatePicker showToday={false} />);
    assert(wrapper.find(".cuke-date-picker-footer-today").length === 0);
  });
  it("should cannot trigger click event when disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<DatePicker disabled onChange={onChange} />);
    wrapper.find(".cuke-date-picker").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
  it("should render extraFooter", () => {
    const Footer = () => <Button>1</Button>;
    const wrapper = shallow(<DatePicker extraFooter={<Footer />} />);
    assert(wrapper.find(Footer).length === 1);
    assert(wrapper.find(".cuke-date-picker-footer-extra").length === 1);
  });
  it("should can not render today and clear when showToday and allowClear is false", () => {
    const wrapper = shallow(
      <DatePicker showToday={false} allowClear={false} />
    );
    assert(wrapper.find(".cuke-date-picker-footer-today").length === 0);
    assert(wrapper.find(".cuke-date-picker-footer-clear").length === 0);
  });
  it.skip("should trigger panel visible change", () => {
    const onPanelVisibleChange = jest.fn();
    const wrapper = shallow(
      <DatePicker onPanelVisibleChange={onPanelVisibleChange} />
    );
    wrapper.find(".cuke-date-picker-input").simulate("click");
    expect(onPanelVisibleChange).toHaveBeenCalled();
  });

  it("should cannot trigger panel visible change when disabled", () => {
    const onPanelVisibleChange = jest.fn();
    const wrapper = shallow(
      <DatePicker disabled onPanelVisibleChange={onPanelVisibleChange} />
    );
    wrapper.find(".cuke-date-picker-input").simulate("click");
    expect(onPanelVisibleChange).not.toHaveBeenCalled();
  });

  it("should trigger today date", () => {
    const wrapper = shallow(<DatePicker />);
    wrapper.find(".cuke-date-picker-footer-today").simulate("click");
    expect(
      wrapper
        .state()
        .momentSelected.day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    ).toEqual(
      moment()
        .day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    );
  });

  it("should render prev month when subtract btn clicked", () => {
    const wrapper = shallow(<DatePicker />);
    wrapper
      .find(".cuke-date-picker-switch-group")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .state()
        .momentSelected.day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    ).toEqual(
      moment()
        .subtract(1, "month")
        .day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    );
  });

  it("should render add month when subtract btn clicked", () => {
    const wrapper = shallow(<DatePicker />);
    wrapper
      .find(".cuke-date-picker-switch-group")
      .at(1)
      .simulate("click");
    expect(
      wrapper
        .state()
        .momentSelected.day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    ).toEqual(
      moment()
        .add(1, "month")
        .day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    );
  });

  it("should clear date when clear btn clicked", () => {
    const wrapper = shallow(<DatePicker />);
    wrapper.find(".cuke-date-picker-footer-clear").simulate("click");
    expect(
      wrapper
        .state()
        .momentSelected.day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    ).toEqual(
      moment()
        .day(0)
        .minute(0)
        .second(0)
        .millisecond(0)
    );
  });

  it("should window cannot trigger click event when un mount", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<DatePicker />);
    wrapper.unmount();
    window.onclick = () => onClick;
    expect(onClick).not.toHaveBeenCalled();
  });
  it("should set new moment selected value when did update ", () => {
    const wrapper = shallow(<DatePicker value={moment()} />);
    wrapper.setProps({
      value: moment("1996-08-25")
    });
    wrapper.update();
    expect(wrapper.state().momentSelected).toEqual(moment("1996-08-25"));
  });
  it("should can not update when set equal value ", () => {
    const wrapper = shallow(<DatePicker value={moment("1996-08-25")} />);
    wrapper.setProps({
      value: moment("1996-08-25")
    });
    wrapper.update();
    expect(wrapper.state().isSelectedMoment).toEqual(true);
  });
  it("should can not render any text when not show prev and next month day ", () => {
    const wrapper = shallow(
      <DatePicker
        value={moment("2018-11-25")}
        showDayInPrevMonth={false}
        showDayInNextMonth={false}
      />
    );
    expect(
      wrapper
        .find(".cuke-date-picker-last-month")
        .at(0)
        .text()
    ).toContain("");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should from 11 month => 10 month when last month button clicked", () => {
    const wrapper = shallow(<DatePicker value={moment("2018-11-25")} />);
    wrapper
      .find(".cuke-date-picker-last-month")
      .at(0)
      .simulate("click");
    expect(wrapper.state().momentSelected.month()).toEqual(10);
  });

  it("should render custom bottom position", () => {
    const wrapper = shallow(<DatePicker position="bottom" />);
    assert(wrapper.find(".cuke-date-picker-position-bottom").length === 1);
  });

  it("should render custom top position", () => {
    const wrapper = shallow(<DatePicker position="top" />);
    assert(wrapper.find(".cuke-date-picker-position-top").length === 1);
  });

  it("should can find only one last month item when moment is 2019-01-03", () => {
    const wrapper = shallow(<DatePicker defaultValue={moment("2019-01-03")} />);
    expect(wrapper.find(".cuke-date-picker-last-month")).toHaveLength(1);
    wrapper.setProps({
      value: moment("2019-02-03")
    });
    expect(wrapper.find(".cuke-date-picker-last-month")).toHaveLength(4);
  });

  it("should can find only three next month item when moment is 2019-01-03", () => {
    const wrapper = shallow(<DatePicker defaultValue={moment("2019-01-03")} />);
    expect(wrapper.find(".cuke-date-picker-next-month")).toHaveLength(3);
    wrapper.setProps({
      value: moment("2019-02-03")
    });
    expect(wrapper.find(".cuke-date-picker-next-month")).toHaveLength(3);
  });

  it("should set last month moment when last button clicked", () => {
    const wrapper = shallow(<DatePicker defaultValue={moment("2019-02-03")} />);
    wrapper
      .find(".cuke-date-picker-switch-group")
      .at(0)
      .simulate("click");
    expect(wrapper.state().momentSelected.format("YYYY-MM-DD")).toEqual(
      "2019-01-03"
    );
  });

  it("should set next month moment when next button clicked", () => {
    const wrapper = shallow(<DatePicker defaultValue={moment("2019-02-03")} />);
    wrapper
      .find(".cuke-date-picker-switch-group")
      .at(1)
      .simulate("click");
    expect(wrapper.state().momentSelected.format("YYYY-MM-DD")).toEqual(
      "2019-03-03"
    );
  });
  it("should find custom popup container class name", () => {
    const wrapper = shallow(
      <DatePicker popupContainerClassName="popup-class-name" />
    );
    expect(wrapper.find(".popup-class-name")).toHaveLength(1);
  });

  it("should can not trigger when date is disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DatePicker disabledDate={() => true} onChange={onChange} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper
      .find(".cuke-date-picker-current-month")
      .at(0)
      .simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should can not trigger when range date is disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <DatePicker
        disabledDate={currentDate =>
          !currentDate.isBetween(moment("2019-01-01"), moment("2019-01-03"))
        }
        defaultValue={moment("2019-01-01")}
        onChange={onChange}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper
      .find(".cuke-date-picker-current-month")
      .at(0)
      .simulate("click");
    expect(onChange).not.toHaveBeenCalled();
    wrapper
      .find(".cuke-date-picker-current-month")
      .at(1)
      .simulate("click");
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.find(".cuke-date-picker-disabled-date")).toHaveLength(34);
  });
});
