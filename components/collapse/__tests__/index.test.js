import React from "react";
import { render, shallow, mount } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Collapse from "../index";

describe("<Collapse/>", () => {
  it("should render Collapse", () => {
    const wrapper = render(
      <Collapse>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-collapse class name", () => {
    const wrapper = shallow(
      <Collapse>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    assert(wrapper.find(".cuke-collapse").length === 1);
  });

  it("should render Collapse.Item", () => {
    const wrapper = shallow(
      <Collapse>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    assert(wrapper.find(Collapse.Item).length === 2);
  });

  it("should render default active key", () => {
    const wrapper = mount(
      <Collapse defaultActiveKey={["1", "2"]}>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    assert(wrapper.find(".cuke-collapse-item-arrow-active").length === 2);
  });

  it("should render active key", () => {
    const wrapper = mount(
      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    assert(wrapper.find(".cuke-collapse-item-arrow-active").length === 1);
  });

  it("should render hide arrow for collapseItem", () => {
    const wrapper = mount(
      <Collapse>
        <Collapse.Item title="标题1" hideArrow>
          内容1
				</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    assert(wrapper.find(".cuke-collapse-item-arrow").length === 1);
  });

  it("should render hide arrow for collapse", () => {
    const wrapper = mount(
      <Collapse hideArrow>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    assert(wrapper.find(".cuke-collapse-item-arrow").length === 0);
  });

  it("should disabled for collapse", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Collapse disabled onChange={onChange}>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    wrapper.find(".cuke-collapse").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should accordion mode", () => {
    const wrapper = shallow(
      <Collapse accordion>
        <Collapse.Item title="标题1">内容1</Collapse.Item>
        <Collapse.Item title="标题2">内容2</Collapse.Item>
      </Collapse>
    );
    wrapper.find(".cuke-collapse").simulate("click");
    assert(wrapper.find(".cuke-collapse-accordion").length === 1);
  });
});
