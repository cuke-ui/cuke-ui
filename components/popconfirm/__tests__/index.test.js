import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Popconfirm from "../index";
import Button from "../../button";
import Popover from "../../popover";
import { ErrorIcon } from "../../icon";

describe("<Popconfirm/>", () => {
  it("should render a <Popconfirm/> components", () => {
    const wrapper = render(
      <div>
        <Popconfirm title="黄瓜ui">
          <span> 鼠标放上来 </span>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="top">
          <Button>上</Button>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="bottom">
          <Button>下</Button>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="left">
          <Button>左</Button>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="right">
          <Button>右</Button>
        </Popconfirm>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-Popconfirm classnames", () => {
    const wrapper = shallow(
      <Popconfirm title="黄瓜ui">
        <span> 鼠标放上来 </span>
      </Popconfirm>
    );
    assert(wrapper.find(".cuke-popconfirm").length === 1);
  });

  it("should render custom position", () => {
    const wrapper = shallow(
      <div>
        <Popconfirm title="黄瓜ui" position="top">
          <Button>上</Button>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="bottom">
          <Button>下</Button>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="left">
          <Button>左</Button>
        </Popconfirm>
        <Popconfirm title="黄瓜ui" position="right">
          <Button>右</Button>
        </Popconfirm>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find Popover", () => {
    const wrapper = shallow(
      <Popconfirm title="黄瓜ui" position="top">
        <Button>上</Button>
      </Popconfirm>
    );
    assert(wrapper.find(Popover).length === 1);
  });

  it("should find button group classnames", () => {
    const wrapper = render(
      <Popconfirm title="黄瓜ui" position="top">
        <Button>上</Button>
      </Popconfirm>
    );
    assert(wrapper.find(".cuke-popconfirm-button-group").length === 1);
  });

  it("should render custom ok text and cancel text", () => {
    const wrapper = render(
      <Popconfirm title="黄瓜ui" position="top" okText="好的" cancelText="取消">
        <Button>上</Button>
      </Popconfirm>
    );
    expect(wrapper.text()).toContain("好的");
    expect(wrapper.text()).toContain("取消");
  });

  it("should render custom children", () => {
    const wrapper = shallow(
      <Popconfirm title="黄瓜ui" position="top">
        <Button>上</Button>
      </Popconfirm>
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should render custom icon", () => {
    const wrapper = shallow(
      <Popconfirm title="黄瓜ui" position="top" icon={<ErrorIcon />}>
        <Button>上</Button>
      </Popconfirm>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip("should trigger onOk and onCancel handle when clicked", () => {
    const onOk = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <Popconfirm title="黄瓜ui" position="top" onOk={onOk} onCancel={onCancel}>
        <Button>上</Button>
      </Popconfirm>
    );
    wrapper.setProps({ visible: true });
    wrapper.setState({ visible: true });
    wrapper
      .find(".cuke-popconfirm-button-group")
      .at(0)
      .simulate("click");
    wrapper
      .find(".cuke-popconfirm-button-group")
      .at(1)
      .simulate("click");
    expect(onOk).toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalled();
  });
});
