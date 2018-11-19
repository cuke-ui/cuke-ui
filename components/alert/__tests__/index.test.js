import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Alert from "../index";
import {
  SuccessIcon,
  WarningIcon,
  InfoIcon,
  ErrorIcon,
  CloseIcon
} from "../../icon";

describe("<Alert/>", () => {
  it("should render a <Alert/> components", () => {
    const wrapper = render(
      <div>
        <Alert type="success" message="黄瓜 ui 开发中" />
        <Alert type="info" message="恭喜你获得充气女友一个" />
        <Alert type="error" message="网费不足,请立即充值,不要坑队友" />
        <Alert type="warning" message="有电危险" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render  description width <Alert/> ", () => {
    const wrapper = render(
      <div>
        <Alert
          type="success"
          message="一等奖"
          description="获得5元兰博基尼购车优惠券"
        />
        <Alert
          type="info"
          message="通知"
          description="请李时珍的皮同学赶快回家,你妈在找你"
        />
        <Alert type="error" message="错误" description="发生了未知的错误" />
        <Alert
          type="warning"
          message="警告"
          description="不要在写代码了,快要猝死了"
        />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-alert classnames", () => {
    const wrapper = render(
      <div>
        <Alert type="success" message="一等奖" />
        <Alert
          type="success"
          message="一等奖"
          description="获得5元兰博基尼购车优惠券"
        />
        <Alert
          type="success"
          message="一等奖"
          closable
          description="获得5元兰博基尼购车优惠券"
        />
      </div>
    );
    assert(wrapper.find(".cuke-alert").length >= 1);
    assert(wrapper.find(".cuke-alert-message").length >= 1);
    assert(wrapper.find(".cuke-alert-close").length === 1);
    assert(wrapper.find(".cuke-alert-description").length >= 1);
    assert(wrapper.find(".cuke-alert-icon").length === 0);
  });

  it("should render icons", () => {
    const wrapper = shallow(
      <div>
        <Alert type="success" message="一等奖" showIcon />
        <Alert type="warning" message="一等奖" showIcon />
        <Alert showIcon type="error" message="一等奖" />
        <Alert showIcon type="info" message="一等奖" closable />
      </div>
    );
    setTimeout(() => {
      assert(wrapper.find(SuccessIcon).length === 1);
      assert(wrapper.find(WarningIcon).length === 1);
      assert(wrapper.find(InfoIcon).length === 1);
      assert(wrapper.find(ErrorIcon).length === 1);
      assert(wrapper.find(CloseIcon).length === 1);
    });
  });

  it("should can trigger onClose event", () => {
    const onClose = jest.fn();
    const wrapper = shallow(
      <Alert
        type="error"
        showIcon
        closable
        message="有一个 bug?"
        onClose={onClose}
      />
    );
    wrapper.find(".cuke-alert-close").simulate("click");
    setTimeout(() => {
      expect(onClose).toHaveBeenCalled();
    }, 500);
  });

  it("should find icon when call renderIcon function", () => {
    const alert = new Alert();
    expect(alert.renderIcon("success")).toEqual(<SuccessIcon />);
    expect(alert.renderIcon("info")).toEqual(<InfoIcon />);
    expect(alert.renderIcon("error")).toEqual(<ErrorIcon />);
    expect(alert.renderIcon("warning")).toEqual(<WarningIcon />);
    expect(alert.renderIcon()).toEqual(<SuccessIcon />);
  });

  it("should can not render <Alert/> when visible is false", () => {
    const wrapper = shallow(<Alert type="info" message="有一个 bug?" />);
    wrapper.setState({ visible: false }, () => {
      assert(wrapper.find(".cuke-alert").length === 0);
    });
  });
});
