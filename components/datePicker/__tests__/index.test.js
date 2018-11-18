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
  it("should can not render today and clear when showToday and showClear is false", () => {
    const wrapper = shallow(<DatePicker showToday={false} showClear={false} />);
    assert(wrapper.find(".cuke-date-picker-footer-today").length === 0);
    assert(wrapper.find(".cuke-date-picker-footer-clear").length === 0);
  });
});
