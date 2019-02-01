import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Divider from "../index";

describe("<Divider/>", () => {
  it("should render a <Divider/> components", () => {
    const wrapper = render(
      <div>
        <Divider />
        <Divider dashed />
        <Divider type="vertical" />
        <Divider>cuke ui</Divider>
        <Divider type="horizontal" position="left">
          11
        </Divider>
        <Divider position="right">cuke ui</Divider>
        <Divider position="left">cuke ui</Divider>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-divider classnames", () => {
    const wrapper = render(
      <div>
        <Divider />
        <Divider dashed />
        <Divider type="vertical" />
        <Divider position="left">cuke ui</Divider>
      </div>
    );
    assert(wrapper.find(".cuke-divider").length >= 1);
    assert(wrapper.find(".cuke-divider-vertical").length === 1);
    assert(wrapper.find(".cuke-divider-dashed").length === 1);
    assert(wrapper.find(".cuke-divider-title-text").length === 1);
  });

  it("should render dashed divider", () => {
    const wrapper = shallow(<Divider dashed />);
    assert(wrapper.find(".cuke-divider-dashed").length === 1);
  });

  it("should render vertical divider", () => {
    const wrapper = shallow(<Divider type="vertical" />);
    assert(wrapper.find(".cuke-divider-vertical").length === 1);
  });

  it("should render center title divider", () => {
    const wrapper = shallow(<Divider>cuke ui title</Divider>);
    assert(wrapper.find(".cuke-divider-title-text").length === 1);
    assert(wrapper.find("b").length === 2);
    assert(wrapper.find("span").length === 1);
  });

  it("should render left title divider", () => {
    const wrapper = shallow(<Divider position="left">cuke ui title</Divider>);
    assert(wrapper.find(".cuke-divider-title-text").length === 1);
    assert(wrapper.find("b").length === 2);
    assert(wrapper.find("span").length === 1);
  });

  it("should render right title divider", () => {
    const wrapper = shallow(<Divider position="right">cuke ui title</Divider>);
    assert(wrapper.find(".cuke-divider-title-text").length === 1);
    assert(wrapper.find("b").length === 2);
    assert(wrapper.find("span").length === 1);
  });
});
