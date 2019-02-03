import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Radio from "../index";

describe("<Radio/>", () => {
  it("should render Radio", () => {
    const wrapper = render(
      <div>
        <Radio>黄瓜 ui</Radio>
        <Radio disabled>黄瓜 ui</Radio>
        <Radio checked disabled />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render Radio.Button", () => {
    const wrapper = render(
      <Radio.Group>
        <Radio.Button>黄瓜 ui</Radio.Button>
        <Radio.Button disabled>黄瓜 ui</Radio.Button>
        <Radio.Button checked disabled />
      </Radio.Group>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render RadioGroup", () => {
    const wrapper = render(
      <div>
        <Radio.Group value={"小红"}>
          <Radio value="小红">小红</Radio>
          <Radio value="小明">小明</Radio>
          <Radio value="小美">小美</Radio>
          <Radio value="小芳">小芳</Radio>
          <Radio value="小黑" disabled>
            小黑
          </Radio>
        </Radio.Group>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render cuke-radio classnames", () => {
    const wrapper = render(
      <div>
        <Radio>黄瓜 ui</Radio>
        <Radio disabled>黄瓜 ui</Radio>
        <Radio checked disabled />
      </div>
    );
    assert(wrapper.find(".cuke-radio").length === 3);
    assert(wrapper.find(".cuke-radio-disabled").length === 2);
    assert(wrapper.find(".cuke-radio-checked").length === 1);
  });
  it("should can not trigger change event width RadioGroup disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Radio.Group value={"小红"} disabled onChange={onChange}>
        <Radio value="小红">小红</Radio>
        <Radio value="小明">小明</Radio>
        <Radio value="小美">小美</Radio>
        <Radio value="小芳">小芳</Radio>
      </Radio.Group>
    );
    wrapper.find("div").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
  it("should can trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Radio onChange={onChange}>黄瓜 ui</Radio>);
    wrapper.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should can not trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Radio onChange={onChange} disabled>
        黄瓜 ui
      </Radio>
    );
    wrapper.find("input").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
  it("should render custom size", () => {
    const wrapper = shallow(
      <div>
        <Radio.Group value={"小红"} size="small">
          <Radio value="小红">小红</Radio>
          <Radio value="小明">小明</Radio>
          <Radio value="小美">小美</Radio>
        </Radio.Group>
        <Radio.Group value={"小红"}>
          <Radio value="小红">小红</Radio>
          <Radio value="小明">小明</Radio>
          <Radio value="小美">小美</Radio>
        </Radio.Group>
        <Radio.Group value={"小红"} size="large">
          <Radio value="小红">小红</Radio>
          <Radio value="小明">小明</Radio>
          <Radio value="小美">小美</Radio>
        </Radio.Group>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should update checked state when props change", () => {
    const wrapper = shallow(<Radio checked={true}>黄瓜 ui</Radio>);
    expect(wrapper.state().checked).toBe(true);
    wrapper.setProps({
      checked: false
    });
    expect(wrapper.state().checked).toBe(false);
  });
});
