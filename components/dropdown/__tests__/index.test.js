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
    const wrapper = render(
      <div>
        <Dropdown overlay={overlay} animate="slideUp">
          slideDown
        </Dropdown>
        <Dropdown overlay={overlay} animate="slideDown">
          slideDown
        </Dropdown>
        <Dropdown overlay={overlay} animate="slideRight">
          slideRight
        </Dropdown>

        <Dropdown overlay={overlay} animate="slideLeft">
          slideLeft
        </Dropdown>

        <Dropdown overlay={overlay} animate={false}>
          no animate
        </Dropdown>
      </div>
    );
    assert(wrapper.find(".cuke-dropdown-overlay-slideUp").length === 1);
    assert(wrapper.find(".cuke-dropdown-overlay-slideDown").length === 1);
    assert(wrapper.find(".cuke-dropdown-overlay-slideRight").length === 1);
    assert(wrapper.find(".cuke-dropdown-overlay-slideLeft").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
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

  it("should trigger on visible change when clicked", () => {
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
