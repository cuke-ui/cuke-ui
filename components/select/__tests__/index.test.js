import React from "react";
import assert from "power-assert";
import { render, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Select from "../index";

describe("<Select/>", () => {
  it("should render a <Select/> components", () => {
    const wrapper = render(
      <Select>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip("should find cuke-select classnames", () => {
    const wrapper = mount(
      <Select>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    assert(wrapper.find(".cuke-select").length >= 1);
    assert(wrapper.find(".cuke-select-option").length >= 1);
  });

  it("should cannot click when disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Select disabled onChange={onChange}>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.find(".cuke-select").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should render init default value", () => {
    const wrapper = shallow(
      <Select defaultValue="黄瓜">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.find(".cuke-select").simulate("click");
    assert(wrapper.state().selectedValue === "黄瓜");
  });

  it("should render init value", () => {
    const wrapper = shallow(
      <Select value="黄瓜">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.find(".cuke-select").simulate("click");
    assert(wrapper.state().selectedValue === "黄瓜");
  });
});
