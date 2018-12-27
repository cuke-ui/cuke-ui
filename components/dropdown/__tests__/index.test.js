import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dropdown from "../index";
import Popover from "../../popover";

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
  });

  it("should find <Popover/>", () => {
    const wrapper = shallow(
      <Dropdown overlay={overlay}>
        <a href="#">今日菜单(有动画)</a>
      </Dropdown>
    );
    assert(wrapper.find(Popover).length === 1);
  });
});
