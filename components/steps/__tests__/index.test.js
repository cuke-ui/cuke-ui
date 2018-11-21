import React from "react";
import { render, shallow } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Steps from "../index";
import { SuccessIcon, LoadingIcon, ErrorIcon } from "../../icon";
import Spin from "../../spin";

describe("<Steps/>", () => {
  it("should render Steps", () => {
    const wrapper = render(
      <Steps>
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-steps class name", () => {
    const wrapper = shallow(
      <Steps>
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps").length === 1);
    assert(wrapper.find(".cuke-steps-step").length === 3);
  });

  it("should find process classnames", () => {
    const wrapper = shallow(
      <Steps current={1}>
     <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-process").length === 1);
  });

  it("should find error classnames when status is error", () => {
    const wrapper = shallow(
      <Steps current={1} status="error">
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-error").length === 1);
  });

  it("should find error icon when status is error", () => {
    const wrapper = shallow(
      <Steps current={1} status="error">
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(ErrorIcon).length === 1);
  });
  it("should find success icon when status is wait", () => {
    const wrapper = shallow(
      <Steps current={1} status="wait">
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(SuccessIcon).length >= 1);
  });
  it("should find loading icon when status is process", () => {
    const wrapper = shallow(
      <Steps current={1} status="process">
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(LoadingIcon).length >= 1);
  });
  it("should find success icon when status is success", () => {
    const wrapper = shallow(
      <Steps current={1} status="done">
        <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(SuccessIcon).length >= 1);
  });
  it("should render description", () => {
    const wrapper = shallow(
      <Steps current={1} status="wait">
      <Steps.Step title="第一步" description="打开冰箱111111"/>
        <Steps.Step title="第二步" description="放入大象22222"/>
        <Steps.Step title="第三步" description="关上冰箱33333"/>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-content-description").length >= 1);
  });

  it("should can not render description", () => {
    const wrapper = shallow(
      <Steps current={1} status="wait">
        <Steps.Step title="第一步"/>
        <Steps.Step title="第二步"/>
        <Steps.Step title="第三步"/>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-content-description").length === 0);
  });

  it("should render custom icon", () => {
    const wrapper = shallow(
      <Steps current={1}>
        <Steps.Step title="第一步" icon={<SuccessIcon />}/>
        <Steps.Step title="第二步" icon={<ErrorIcon />}/>
        <Steps.Step title="第三步" icon={<LoadingIcon />}/>
      </Steps>
    );
    assert(wrapper.find(SuccessIcon).length === 1);
    assert(wrapper.find(ErrorIcon).length === 1);
    assert(wrapper.find(LoadingIcon).length === 1);
  });

  it("should render spin when showProcessSpin is true", () => {
    const wrapper = shallow(
      <Steps current={1} showProcessSpin>
        <Steps.Step title="第一步"/>
        <Steps.Step title="第二步"/>
        <Steps.Step title="第三步"/>
      </Steps>
    );
    assert(wrapper.find(Spin).length === 1);
  });

  it("should can not render spin when showProcessSpin is false", () => {
    const wrapper = shallow(
      <Steps current={1} showProcessSpin={false}>
        <Steps.Step title="第一步"/>
        <Steps.Step title="第二步"/>
        <Steps.Step title="第三步"/>
      </Steps>
    );
    assert(wrapper.find(Spin).length === 0);
  });

  it("should can find .cuke-step when not have content", () => {
    const wrapper = shallow(
      <Steps current={1} showProcessSpin={false}>
        <Steps.Step title="第一步"/>
        <Steps.Step title="第二步"/>
        <Steps.Step title="第三步"/>
      </Steps>
    );
    assert(wrapper.find('.cuke-step').length === 0);
  });

  it("should find two is done status classnames", () => {
    const wrapper = shallow(
      <Steps current={1}>
        <Steps.Step title="第一步"/>
        <Steps.Step title="第二步"/>
        <Steps.Step title="第三步"/>
      </Steps>
    );
    wrapper.setProps(
      {
        current: 2
      },
      () => {
        assert(wrapper.find(".cuke-steps-step-done").length === 2);
      }
    );
  });

  it("should cao not render step content when visible is false", () => {
    const wrapper = render(
      <Steps.Step visible={false}/>
    );
    assert(wrapper.find('.cuke-step').length === 0);
  });

  it("should render step content when visible is true", () => {
    const wrapper = shallow(
      <Steps.Step visible>1</Steps.Step>
    );
    assert(wrapper.find('.cuke-step').length === 1);
    expect(wrapper.text()).toContain("1")
  });

  it("should can not render step content", () => {
    const wrapper = shallow(
      <Steps current={1}>
        <Steps.Step title="第一步"/>
        <Steps.Step title="第二步"/>
        <Steps.Step title="第三步"/>
      </Steps>
    );
    assert(wrapper.find('.cuke-step').length === 0);
  });
});
