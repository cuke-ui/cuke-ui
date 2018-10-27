import React from "react";
import { render, shallow, mount } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Drawer from "../index";

describe("<Drawer/>", () => {
  it("should render a <Drawer/> components", () => {
    const wrapper = render(
      <div>
        <Drawer title="基本使用" visible>
          <span>基本使用</span>
        </Drawer>
        <Drawer title="基本使用" visible width={500}>
          <span>无 footer</span>
        </Drawer>
        <Drawer title="基本使用" visible width={500} zIndex={9999}>
          <span>无 footer</span>
        </Drawer>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip("should can not clicked with set maskClosable false", () => {
    const onCancelClick = jest.fn();
    const wrapper = mount(
      <Drawer visible={true} onCancel={onCancelClick}>
        <span>关闭回调</span>
      </Drawer>
    );
    wrapper.find(".cuke-drawer").simulate("click");
    assert(wrapper.props().visible === true);
    expect(onCancelClick).not.toHaveBeenCalled();
  });

  it("should render custom direction", () => {
    const wrapper = render(
      <div>
        <Drawer visible placement="left">
          <span>关闭回调</span>
        </Drawer>
        <Drawer visible placement="top">
          <span>关闭回调</span>
        </Drawer>
        <Drawer visible placement="right">
          <span>关闭回调</span>
        </Drawer>
        <Drawer visible placement="bottom">
          <span>关闭回调</span>
        </Drawer>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should can trigger onClose event", () => {
    const onCancelClick = jest.fn();
    const wrapper = shallow(
      <Drawer title="关闭回调" visible onClose={onCancelClick}>
        <span>关闭回调</span>
      </Drawer>
    );
    wrapper.find(".cuke-drawer").simulate("click");
    expect(onCancelClick).not.toHaveBeenCalled();
  });
});
