import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
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

  it("should find cuke-select classnames", () => {
    const wrapper = shallow(
      <Select>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    assert(wrapper.find(".cuke-select").length >= 1);
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

  it("should can trigger click when disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Select onChange={onChange}>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.find(".cuke-select-input").simulate("click");
    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    });
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

  it("should trigger onChange when clicked", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Select.Option value="茄子" onChange={onChange}>
        茄子
      </Select.Option>
    );
    wrapper.find(".cuke-select-option").simulate("click");
    expect(onChange).toHaveBeenCalled();
  });

  it("should window cannot trigger click event when un mount", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Select value="黄瓜">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.unmount();
    window.onclick = () => onClick;
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should panel cannot hidden click event when window click", () => {
    const wrapper = shallow(
      <Select value="黄瓜">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );

    window.onclick();
    assert(wrapper.state().visible === null);
    wrapper.find(".cuke-select-input").simulate("click");
    assert(wrapper.state().visible === true);
    window.onclick();
    assert(wrapper.state().visible === true);
  });

  it("should trigger panel visible change", () => {
    const onPanelVisibleChange = jest.fn();
    const wrapper = shallow(
      <Select value="黄瓜">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.find(".cuke-select-input").simulate("click");
    setTimeout(() => {
      expect(onPanelVisibleChange).toHaveBeenCalled();
    });
  });

  it("should cannot trigger panel visible change when disabled groups", () => {
    const onPanelVisibleChange = jest.fn();
    const wrapper = shallow(
      <Select value="黄瓜">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );
    wrapper.find(".cuke-select-input").simulate("click");
    expect(onPanelVisibleChange).not.toHaveBeenCalled();
  });
});
