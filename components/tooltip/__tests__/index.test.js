import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tooltip, { TooltipPortal } from "../index";
import Button from "../../button";

describe("<Tooltip/>", () => {
  it("should render a <Tooltip/> components", () => {
    const wrapper = render(
      <div>
        <Tooltip title="黄瓜ui">
          <span> 鼠标放上来 </span>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="top">
          <Button>上</Button>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="bottom" style={{ margin: "0 10px" }}>
          <Button>下</Button>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="left" style={{ margin: "0 10px" }}>
          <Button>左</Button>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="right">
          <Button>右</Button>
        </Tooltip>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-tooltip classnames", () => {
    const wrapper = shallow(
      <Tooltip title="黄瓜ui">
        <span> 鼠标放上来 </span>
      </Tooltip>
    );
    assert(wrapper.find(".cuke-tooltip").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom position", () => {
    const wrapper = shallow(
      <div>
        <Tooltip title="黄瓜ui" position="top">
          <Button>上</Button>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="bottom">
          <Button>下</Button>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="left">
          <Button>左</Button>
        </Tooltip>
        <Tooltip title="黄瓜ui" position="right">
          <Button>右</Button>
        </Tooltip>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find position classnames", () => {
    const wrapper = shallow(
      <Tooltip title="黄瓜ui" position="top">
        <Button>上</Button>
      </Tooltip>
    );
    assert(wrapper.find(".position-top").length === 1);
  });

  it("should find TooltipPortal", () => {
    const wrapper = shallow(
      <Tooltip title="黄瓜ui" position="top">
        <Button>上</Button>
      </Tooltip>
    );
    assert(wrapper.find(TooltipPortal).length === 1);
  });

  it("should find TooltipPortal", () => {
    const wrapper = shallow(
      <Tooltip title="黄瓜ui" position="top">
        <Button>上</Button>
      </Tooltip>
    );
    wrapper.setState({ visible: true });
    assert(wrapper.find(".cuke-tooltip-show").length === 1);
    wrapper.setState({ visible: false });
    assert(wrapper.find(".cuke-tooltip-hide").length === 1);
  });

  it("should render custom children", () => {
    const wrapper = shallow(
      <Tooltip title="黄瓜ui" position="top">
        <Button>上</Button>
      </Tooltip>
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should trigger onVisibleChange", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Tooltip title="黄瓜ui" position="top" onVisibleChange={onChange}>
        <Button>上</Button>
      </Tooltip>
    );
    wrapper.find(".cuke-tooltip").simulate("mouseleave");
    expect(onChange).toHaveBeenCalled();
  });

  it("should find test dom by portal", () => {
    const wrapper = shallow(
      <TooltipPortal>
        <Button>1</Button>
      </TooltipPortal>
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should append div to body by portal", () => {
    shallow(
      <TooltipPortal>
        <div id="test" />
      </TooltipPortal>
    );
    setTimeout(() => {
      expect(document.querySelector("div > #test")).toHaveLength(1);
    });
  });
});
