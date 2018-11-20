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
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-steps class name", () => {
    const wrapper = shallow(
      <Steps>
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps").length === 1);
    assert(wrapper.find(".cuke-steps-step").length === 3);
  });

  it("should find process classnames", () => {
    const wrapper = shallow(
      <Steps current={1}>
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-process").length === 1);
  });

  it("should find error classnames when status is error", () => {
    const wrapper = shallow(
      <Steps current={1} status="error">
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-error").length === 1);
  });

  it("should find error icon when status is error", () => {
    const wrapper = shallow(
      <Steps current={1} status="error">
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(ErrorIcon).length === 1);
  });
  it("should find wait icon when status is error", () => {
    const wrapper = shallow(
      <Steps current={1} status="wait">
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(SuccessIcon).length >= 1);
  });
  it("should render description", () => {
    const wrapper = shallow(
      <Steps current={1} status="wait">
        <Steps.Step title="第一步" description="打开冰箱111111">
          1
        </Steps.Step>
        <Steps.Step title="第二步" description="放入大象22222">
          2
        </Steps.Step>
        <Steps.Step title="第三步" description="关上冰箱33333">
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-content-description").length >= 1);
  });

  it("should can not render description", () => {
    const wrapper = shallow(
      <Steps current={1} status="wait">
        <Steps.Step title="第一步">1</Steps.Step>
        <Steps.Step title="第二步">2</Steps.Step>
        <Steps.Step title="第三步">3</Steps.Step>
      </Steps>
    );
    assert(wrapper.find(".cuke-steps-step-content-description").length === 0);
  });

  it("should render custom icon", () => {
    const wrapper = shallow(
      <Steps current={1}>
        <Steps.Step title="第一步" icon={<SuccessIcon />}>
          1
        </Steps.Step>
        <Steps.Step title="第二步" icon={<ErrorIcon />}>
          2
        </Steps.Step>
        <Steps.Step title="第三步" icon={<LoadingIcon />}>
          3
        </Steps.Step>
      </Steps>
    );
    assert(wrapper.find(SuccessIcon).length === 1);
    assert(wrapper.find(ErrorIcon).length === 1);
    assert(wrapper.find(LoadingIcon).length === 1);
  });

  it("should render spin when showProcessSpin is true", () => {
    const wrapper = shallow(
      <Steps current={1} showProcessSpin>
        <Steps.Step title="第一步">1</Steps.Step>
        <Steps.Step title="第二步">2</Steps.Step>
        <Steps.Step title="第三步">3</Steps.Step>
      </Steps>
    );
    assert(wrapper.find(Spin).length === 1);
  });

  it("should can not render spin when showProcessSpin is false", () => {
    const wrapper = shallow(
      <Steps current={1} showProcessSpin={false}>
        <Steps.Step title="第一步">1</Steps.Step>
        <Steps.Step title="第二步">2</Steps.Step>
        <Steps.Step title="第三步">3</Steps.Step>
      </Steps>
    );
    assert(wrapper.find(Spin).length === 0);
  });

  it("should find two is done status classnames", () => {
    const wrapper = shallow(
      <Steps current={1}>
        <Steps.Step title="第一步">1</Steps.Step>
        <Steps.Step title="第二步">2</Steps.Step>
        <Steps.Step title="第三步">3</Steps.Step>
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
});
