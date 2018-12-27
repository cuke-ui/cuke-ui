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
    assert(wrapper.find(".cuke-tooltip-position-top").length === 1);
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
    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    }, 100);
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

  it("should remove div when portal un mount", () => {
    const wrapper = shallow(
      <TooltipPortal>
        <div id="test" />
      </TooltipPortal>
    );
    wrapper.unmount();
  });

  it("should remove div when portal un mount", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TooltipPortal onChange={onChange}>
        <div id="test" />
      </TooltipPortal>
    );
    wrapper.setProps({
      visible: true
    });
    expect(onChange).toHaveBeenCalled();
  });

  it("should render custom dark theme", () => {
    const wrapper = shallow(
      <Tooltip title="测试" theme="dark">
        <Button>1</Button>
      </Tooltip>
    );
    expect(wrapper.find(".cuke-tooltip-dark")).toHaveLength(1);
  });
  it("should render custom light theme", () => {
    const wrapper = shallow(
      <Tooltip title="测试" theme="light">
        <Button>1</Button>
      </Tooltip>
    );
    expect(wrapper.find(".cuke-tooltip-light")).toHaveLength(1);
  });

  it("should render custom light theme", () => {
    const wrapper = shallow(
      <Tooltip title="测试" hiddenArrow>
        <Button>1</Button>
      </Tooltip>
    );
    expect(wrapper.find(".cuke-tooltip-hidden-arrow")).toHaveLength(1);
  });

  it("should can not trigger onVisibleChange when disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Tooltip title="测试" disabled onVisibleChange={onChange}>
        <Button>1</Button>
      </Tooltip>
    );
    wrapper.find(".cuke-tooltip").simulate("mouseleave");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should window cannot trigger click event when un mount", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Tooltip title="测试">
        <Button>1</Button>
      </Tooltip>
    );
    wrapper.unmount();
    window.onclick = () => onClick;
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should update visible state when props visible change", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Tooltip title="测试" visible={false} onVisibleChange={onChange}>
        <Button>1</Button>
      </Tooltip>
    );
    wrapper.setProps({ visible: true });
    expect(wrapper.state().visible).toEqual(true);
    wrapper.setProps({ visible: false });
    expect(wrapper.state().visible).toEqual(false);
    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    }, 100);
  });

  it("should custom popup container", () => {
    const wrapper = shallow(
      <Tooltip
        title="测试"
        getPopupContainer={() => document.querySelector(".cuke-tooltip")}
      >
        <Button>1</Button>
      </Tooltip>
    );
    setTimeout(() => {
      expect(wrapper.find(".cuke-tooltip > div")).toHaveLength(1);
    }, 100);
  });

  it.skip("should panel cannot hidden click event when window click", () => {
    const wrapper = shallow(
      <Tooltip title="测试" trigger="click">
        <Button>1</Button>
      </Tooltip>
    );

    window.onclick();
    assert(wrapper.state().visible === null);
    wrapper.find(".cuke-tooltip").simulate("click");
    assert(wrapper.state().visible === true);
    window.onclick();
    assert(wrapper.state().visible === false);
  });

  //TODO: TypeError: Cannot read property 'getBoundingClientRect' of null
  it.skip("should trigger on visible change when hover", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Tooltip title="测试" onVisibleChange={onChange}>
        <Button>1</Button>
      </Tooltip>
    );
    wrapper.find(".cuke-tooltip").simulate("mouseenter");
    expect(onChange).toHaveBeenCalled();
  });

  it.skip("should trigger on visible change when clicked", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Tooltip title="测试" trigger="click" onVisibleChange={onChange}>
        <Button>1</Button>
      </Tooltip>
    );
    wrapper.find(".cuke-tooltip").simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
});
