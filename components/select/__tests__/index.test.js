import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Select from "../index";
import Empty from "../../empty";
import Button from "../../button";

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
  it("should render custom size", () => {
    const wrapper = render(
      <div>
        <Select placeholder="请选择" size="small">
          <Select.Option value="黄瓜">黄瓜</Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>
        <Select placeholder="请选择">
          <Select.Option value="黄瓜">黄瓜</Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>
        <Select placeholder="请选择" size="large">
          <Select.Option value="黄瓜">黄瓜</Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>
      </div>
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
    wrapper
      .find(Select.Option)
      .at(0)
      .simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should can trigger click", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Select onChange={onChange}>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
    );

    wrapper
      .find(Select.Option)
      .at(0)
      .simulate("click");
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

  it.skip("should panel cannot hidden click event when window click", () => {
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

  it.skip("should trigger panel visible change", () => {
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

  it.skip("should cannot trigger panel visible change when disabled groups", () => {
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

  it("should render not found content when option is Empty", () => {
    const wrapper = shallow(<Select value="黄瓜" />);
    assert(wrapper.find(Empty).length === 1);
    assert(wrapper.find(".cuke-select-option").length === 0);
  });

  it("should render custom not found content", () => {
    const wrapper = shallow(
      <Select value="黄瓜" notFoundContent={<Button>111</Button>} />
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should find custom popup container class name ", () => {
    const wrapper = shallow(
      <Select value="黄瓜" popupContainerClassName="test" />
    );
    assert(wrapper.find(".test").length === 1);
  });

  it("should find loading icon", () => {
    const wrapper = render(
      <Select value="黄瓜" loading>
        <Select.Option value="黄瓜">123</Select.Option>
        <Select.Option value="茄子">123</Select.Option>
        <Select.Option value="番茄">123</Select.Option>
      </Select>
    );
    expect(wrapper.find(".cuke-select-loading")).toHaveLength(1);
  });

  it("should find loading icon", () => {
    const wrapper = shallow(
      <Select value="黄瓜" loading>
        <Select.Option value="黄瓜">123</Select.Option>
        <Select.Option value="茄子">123</Select.Option>
        <Select.Option value="番茄">123</Select.Option>
      </Select>
    );

    expect(wrapper.state().selectedValue).toEqual("黄瓜");
    wrapper.setProps({ value: "番茄" });
    expect(wrapper.state().selectedValue).toEqual("番茄");
  });
});
