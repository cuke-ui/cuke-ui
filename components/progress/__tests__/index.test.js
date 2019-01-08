import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Progress from "../index";

describe("<Progress/>", () => {
  it("should render a <Progress/> components", () => {
    const wrapper = render(
      <div>
        <Progress percent={70} />
        <Progress percent={70} animation={false} />
        <Progress percent={70} circle />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render five type width <Progress/> ", () => {
    const wrapper = render(
      <div>
        <Progress percent={20} type="default" />
        <Progress percent={30} type="success" />
        <Progress percent={40} type="info" />
        <Progress percent={50} type="warning" />
        <Progress percent={60} type="error" />

        <Progress percent={20} type="default" animation={false} />
        <Progress percent={30} type="success" animation={false} />
        <Progress percent={40} type="info" animation={false} />
        <Progress percent={50} type="warning" animation={false} />
        <Progress percent={60} type="error" animation={false} />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-progress classnames", () => {
    const wrapper = render(
      <div>
        <Progress percent={20} />
        <Progress percent={20} animation={true} />
      </div>
    );
    assert(wrapper.find(".cuke-progress").length >= 1);
    assert(wrapper.find(".cuke-progress-enter").length >= 1);
    assert(wrapper.find(".cuke-progress-bg-animation").length === 1);
    assert(wrapper.find(".cuke-progress-bg").length >= 1);
    assert(wrapper.find(".cuke-progress-num").length >= 1);
  });

  it("should find cuke-progress-circle classnames", () => {
    const wrapper = shallow(<Progress percent={20} circle={true} />);
    assert(wrapper.find(".cuke-progress-circle").length >= 1);
    assert(wrapper.find(".cuke-progress-circle-wrapper").length === 1);
  });

  it("should render custom format", () => {
    const wrapper = shallow(
      <Progress percent={20} circle format={percent => `自定义${percent}`} />
    );
    expect(wrapper.text()).toContain("自定义20");
  });

  it("should render max and min limit [0-100]", () => {
    const wrapper = shallow(<Progress percent={20} />);
    wrapper.setProps({
      percent: 110
    });
    expect(wrapper.state().percent).toBe(100);
    wrapper.setProps({
      percent: -10
    });
    expect(wrapper.state().percent).toBe(0);
  });

  it("should update state percent when props change", () => {
    const wrapper = shallow(<Progress percent={20} />);
    wrapper.setProps({
      percent: 30
    });
    expect(wrapper.state().percent).toBe(30);
  });

  it("should can not render info when set showInfo with false", () => {
    const wrapper = render(
      <div>
        <Progress percent={20} showInfo={false} />
      </div>
    );
    assert(wrapper.find(".cuke-progress-num").length === 0);
  });
});
