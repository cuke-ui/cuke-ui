import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Checkbox from "../index";

describe("<Checkbox/>", () => {
  it("should render Checkbox", () => {
    const wrapper = render(
      <div>
        <Checkbox>黄瓜 ui</Checkbox>
        <Checkbox disabled>黄瓜 ui</Checkbox>
        <Checkbox checked disabled />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render CheckboxGroup", () => {
    const wrapper = render(
      <Checkbox.Group>
        <Checkbox value="黄瓜">黄瓜</Checkbox>
        <Checkbox value="茄子">茄子</Checkbox>
        <Checkbox value="玉米">玉米</Checkbox>
        <Checkbox value="番茄" disabled>
          番茄
        </Checkbox>
      </Checkbox.Group>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render cuke-checkbox classnames", () => {
    const wrapper = render(
      <div>
        <Checkbox>黄瓜 ui</Checkbox>
        <Checkbox disabled>黄瓜 ui</Checkbox>
        <Checkbox checked disabled />
      </div>
    );
    assert(wrapper.find(".cuke-checkbox").length === 3);
    assert(wrapper.find(".cuke-checkbox-disabled").length === 2);
    assert(wrapper.find(".cuke-checkbox-checked").length === 1);
  });
  it("should can trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Checkbox onChange={onChange}>黄瓜 ui</Checkbox>);
    wrapper.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should can not trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Checkbox onChange={onChange} disabled>
        黄瓜 ui
      </Checkbox>
    );
    wrapper.find(".cuke-checkbox").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
  it("should can trigger change event for checkbox group", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Checkbox.Group onChange={onChange}>
        <Checkbox value="黄瓜">黄瓜</Checkbox>
        <Checkbox value="茄子">茄子</Checkbox>
        <Checkbox value="玉米">玉米</Checkbox>
        <Checkbox value="番茄" disabled>
          番茄
        </Checkbox>
      </Checkbox.Group>
    );
    wrapper
      .find(Checkbox)
      .at(0)
      .simulate("change", { target: {} });
    expect(onChange).toHaveBeenCalled();
  });
  it("should can not trigger change event for checkbox group", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Checkbox.Group onChange={onChange} disabled>
        <Checkbox value="黄瓜">黄瓜</Checkbox>
        <Checkbox value="茄子">茄子</Checkbox>
        <Checkbox value="玉米">玉米</Checkbox>
        <Checkbox value="番茄">番茄</Checkbox>
      </Checkbox.Group>
    );
    setTimeout(() => {
      wrapper.find(".cuke-checkbox-input").simulate("change");
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
