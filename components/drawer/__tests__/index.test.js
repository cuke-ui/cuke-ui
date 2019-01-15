import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Drawer from "../index";
import Button from "../../button";

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

  it("should render custom footer", () => {
    const wrapper = shallow(
      <Drawer title="关闭回调" visible footer={<Button>11</Button>}>
        <span>关闭回调</span>
      </Drawer>
    );
    assert(wrapper.find(".cuke-drawer-footer").length === 1);
    assert(wrapper.find(Button).length === 1);
  });

  it("should can not render title", () => {
    const wrapper = shallow(
      <Drawer visible>
        <span>关闭回调</span>
      </Drawer>
    );
    assert(wrapper.find(".cuke-drawer-no-title").length === 1);
  });

  it("should can not find cuke-drawer-no-title when title exist", () => {
    const wrapper = shallow(
      <Drawer visible title="test">
        <span>关闭回调</span>
      </Drawer>
    );
    assert(wrapper.find(".cuke-drawer-no-title").length === 0);
  });

  it("should can not render custom footer", () => {
    const wrapper = shallow(
      <Drawer title="关闭回调" visible footer={null}>
        <span>关闭回调</span>
      </Drawer>
    );
    assert(wrapper.find(".cuke-drawer-footer").length === 0);
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
  it("should enable scroll and disabled scroll", () => {
    const wrapper = shallow(
      <Drawer visible={false}>
        <span>1</span>
      </Drawer>
    );
    wrapper.update();
    expect(document.body.style.paddingRight).toBe("");
    wrapper.setState({
      visible: true
    });
    wrapper.update();
    setTimeout(() => {
      expect(document.body.style.paddingRight).toBe("15px");
    });
  });
  it("should set body style when did update", () => {
    const wrapper = shallow(
      <Drawer visible={false}>
        <span>1</span>
      </Drawer>
    );
    wrapper.setProps({ visible: true });
    wrapper.update();
    expect(document.body.style.overflow).toEqual("hidden");
    expect(document.body.style.paddingRight).toEqual("15px");
    wrapper.setProps({ visible: false });
    wrapper.update();
    expect(document.body.style.overflow).toEqual("");
    expect(document.body.style.paddingRight).toEqual("0px");
  });

  it("should find custom wrapperClassName ", () => {
    const wrapper = shallow(
      <Drawer wrapperClassName="test" visible>
        1111
      </Drawer>
    );
    assert(wrapper.find(".test").length === 1);
  });
});
