import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Alert from "../index";

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
  });

  it("should can trigger onClose event", () => {
    const wrapper = shallow(
      <Alert
        type="error"
        showIcon
        closable
        message="有一个 bug?"
        onClose={() => wrapper.setState({ message: "关闭" })}
      />
    );
    wrapper.find(".cuke-alert-close").simulate("click");
    setTimeout(() => {
      assert(wrapper.state().message === "关闭");
    });
  });

  it("should can not render <Alert/> when visible is false", () => {
    const wrapper = shallow(<Alert type="info" message="有一个 bug?" />);
    wrapper.setState({ visible: false }, () => {
      assert(wrapper.find(".cuke-alert").length === 0);
    });
  });
});
