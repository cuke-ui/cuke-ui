import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
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

  it("should can not clicked with set maskClosable false", () => {
    const onCancelClick = jest.fn();
    const wrapper = shallow(
      <Drawer visible={true} maskClosable={false} onCancel={onCancelClick}>
        <span>关闭回调</span>
      </Drawer>
    );
    wrapper.find(".cuke-drawer").simulate("click");
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
    wrapper.find(".cuke-drawer-close").simulate("click");
    expect(onCancelClick).toHaveBeenCalled();
  });

  it("should disabled scroll when did update", () => {
    const wrapper = shallow(
      <Drawer title="关闭回调" visible>
        <span>关闭回调</span>
      </Drawer>
    );
    wrapper.update();
    assert(document.body.style.overflow === "");
  });
});
