import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tooltip from "../index";
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

  // it('should render custom position', () => {
  // 	const wrapper = mount(
  // 		<div>
  // 			<Tooltip title="黄瓜ui" position="top">
  // 				<Button>上</Button>
  // 			</Tooltip>
  // 			<Tooltip title="黄瓜ui" position="bottom">
  // 				<Button>下</Button>
  // 			</Tooltip>
  // 			<Tooltip title="黄瓜ui" position="left">
  // 				<Button>左</Button>
  // 			</Tooltip>
  // 			<Tooltip title="黄瓜ui" position="right">
  // 				<Button>右</Button>
  // 			</Tooltip>
  // 		</div>
  // 	);
  // 	expect(toJson(wrapper)).toMatchSnapshot();
  // 	assert(wrapper.find('.position-top').length === 0);

  // 	wrapper.setState({ visible: true })
  // 	assert(wrapper.find('.position-top').length === 1);
  // 	assert(wrapper.find('.position-bottom').length === 1);
  // 	assert(wrapper.find('.position-left').length === 1);
  // 	assert(wrapper.find('.position-right').length === 1);
  // });
});
