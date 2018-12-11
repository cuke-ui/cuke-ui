import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dropdown from "../index";

const overlay = (
  <ul>
    <li> 红烧牛肉 </li>
    <li> 麻辣干锅 </li>
    <li> 仔姜肉丝 </li>
  </ul>
);

describe("<Dropdown/>", () => {
  it("should render a <Dropdown/> components", () => {
    const wrapper = render(
      <div>
        <Dropdown overlay={overlay}>
          <a href="#">今日菜单(有动画)</a>
        </Dropdown>
        <Dropdown overlay={overlay} animate={false}>
          <a href="#">今日菜单(无动画)</a>
        </Dropdown>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-dropdown classnames", () => {
    const wrapper = render(
      <div>
        <Dropdown overlay={overlay}>
          <a href="#">今日菜单(有动画)</a>
        </Dropdown>
        <Dropdown overlay={overlay} animate={false}>
          <a href="#">今日菜单(无动画)</a>
        </Dropdown>
      </div>
    );
    assert(wrapper.find(".cuke-dropdown").length >= 1);
    assert(wrapper.find(".cuke-dropdown-wrap").length >= 1);
    assert(wrapper.find(".cuke-dropdown-overlay").length >= 1);
  });

  it("should render disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <div>
        <Dropdown overlay={overlay} disabled onVisibleChange={onChange}>
          <a href="#">今日菜单(有动画)</a>
        </Dropdown>
      </div>
    );
    wrapper.find("div").simulate("change");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should render many animate type", () => {
    const wrapper = shallow(
      <Dropdown overlay={overlay} animate="slideUp">
        slideUp
      </Dropdown>
    );
    wrapper.setState({ visible: true });
    assert(wrapper.find(".cuke-dropdown-overlay-slideUp").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should can not trigger animate", () => {
    const wrapper = shallow(
      <Dropdown overlay={overlay} animate={false}>
        slideUp
      </Dropdown>
    );
    assert(wrapper.find(".cuke-dropdown-overlay-slideUp").length === 0);
  });

  it("should trigger on visible change when hover", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Dropdown overlay={overlay} onVisibleChange={onChange}>
        <a href="#">今日菜单(有动画)</a>
      </Dropdown>
    );
    wrapper.find(".cuke-dropdown").simulate("blur");
    expect(onChange).toHaveBeenCalled();
  });

  it.skip("should trigger on visible change when clicked", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Dropdown overlay={overlay} onVisibleChange={onChange} trigger="click">
        <a href="#">今日菜单(有动画)</a>
      </Dropdown>
    );
    wrapper.find(".cuke-dropdown").simulate("focus");
    expect(onChange).toHaveBeenCalled();
  });
  it("should trigger on visible change when clicked", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Dropdown overlay={overlay} onVisibleChange={onChange} trigger="click">
        <a href="#">今日菜单(有动画)</a>
      </Dropdown>
    );
    wrapper.find(".cuke-dropdown").simulate("blur");
    expect(onChange).toHaveBeenCalled();
  });
});
