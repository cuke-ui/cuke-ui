import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Popover from "../index";
import Button from "../../button";
import Tooltip from "../../tooltip";

describe("<Popover/>", () => {
  it("should render a <Popover/> components", () => {
    const wrapper = render(
      <div>
        <Popover title="黄瓜ui" content="11">
          <span> 鼠标放上来 </span>
        </Popover>
        <Popover title="黄瓜ui" position="top" content="11">
          <Button>上</Button>
        </Popover>
        <Popover title="黄瓜ui" position="bottom" content="11">
          <Button>下</Button>
        </Popover>
        <Popover title="黄瓜ui" position="left" content="11">
          <Button>左</Button>
        </Popover>
        <Popover title="黄瓜ui" position="right">
          <Button>右</Button>
        </Popover>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-popover classnames", () => {
    const wrapper = shallow(
      <Popover title="黄瓜ui">
        <span> 鼠标放上来 </span>
      </Popover>
    );
    assert(wrapper.find(".cuke-popover").length === 1);
  });

  it("should render custom position", () => {
    const wrapper = shallow(
      <div>
        <Popover title="黄瓜ui" position="top">
          <Button>上</Button>
        </Popover>
        <Popover title="黄瓜ui" position="bottom">
          <Button>下</Button>
        </Popover>
        <Popover title="黄瓜ui" position="left">
          <Button>左</Button>
        </Popover>
        <Popover title="黄瓜ui" position="right">
          <Button>右</Button>
        </Popover>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find Tooltip", () => {
    const wrapper = shallow(
      <Popover title="黄瓜ui" position="top">
        <Button>上</Button>
      </Popover>
    );
    assert(wrapper.find(Tooltip).length === 1);
  });

  it("should render custom children", () => {
    const wrapper = shallow(
      <Popover title="黄瓜ui" position="top">
        <Button>上</Button>
      </Popover>
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should can not render content", () => {
    const wrapper = shallow(
      <Popover title="黄瓜ui" position="top">
        <Button>上</Button>
      </Popover>
    );
    assert(wrapper.find(".cuke-popover-content").length === 0);
  });

  it("should can not render title", () => {
    const wrapper = shallow(
      <Popover content="黄瓜ui" position="top">
        <Button>上</Button>
      </Popover>
    );
    assert(wrapper.find(".cuke-popover-title").length === 0);
  });

  it("should update visible state when props visible change", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Popover title="黄瓜ui" position="top" onVisibleChange={onChange}>
        <Button>上</Button>
      </Popover>
    );
    wrapper.setProps({ visible: true });
    expect(wrapper.state().visible).toEqual(true);
    wrapper.setProps({ visible: false });
    expect(wrapper.state().visible).toEqual(false);
    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    }, 100);
  });
});
