import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "../index";
import Button from "../../button";
import { SuccessIcon, InfoIcon, ErrorIcon } from "../../icon";
import Spin from "../../spin";

describe("<Card/>", () => {
  it("should render a <Card/> components", () => {
    const wrapper = render(
      <Card title="黄瓜 ui" extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-card classnames", () => {
    const wrapper = shallow(
      <Card title="黄瓜 ui" extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card").length >= 1);
    assert(wrapper.find(".cuke-card-header").length >= 1);
    assert(wrapper.find(".cuke-card-header-title").length >= 1);
    assert(wrapper.find(".cuke-card-header-extra").length >= 1);
    assert(wrapper.find(".cuke-card-content").length >= 1);
  });

  it("should render custom shallow", () => {
    const wrapper = shallow(
      <Card title="黄瓜 ui" extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-shadow").length === 1);
    wrapper.setProps({
      shadow: false
    });
    assert(wrapper.find(".cuke-card-shadow").length === 0);
  });

  it("should render custom title overflow hidden", () => {
    const wrapper = shallow(
      <Card
        title="黄瓜 ui"
        extra={<Button href="#">更多</Button>}
        titleOverflowHidden={true}
      >
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-overflow-hidden").length === 1);
    wrapper.setProps({
      titleOverflowHidden: false
    });
    assert(wrapper.find(".cuke-card-overflow-hidden").length === 0);
  });

  it("should can not render title", () => {
    const wrapper = shallow(
      <Card extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-header-hidden").length === 0);
  });

  it("should can not render title", () => {
    const wrapper = shallow(
      <Card>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-header-extra").length === 0);
  });

  it("should find card hover classnames", () => {
    const wrapper = shallow(
      <Card showShadowWhenHover>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-hover").length === 1);
  });

  it("should render spin when loading", () => {
    const wrapper = shallow(
      <Card loading>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-loading").length === 1);
    assert(wrapper.find(Spin).length === 1);
  });

  it("should render spin when loading", () => {
    const wrapper = shallow(
      <Card cover="https://dummyimage.com/300x200/396/fff">
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-cover").length === 1);
  });
  it("should render actions", () => {
    const wrapper = shallow(
      <Card
        title="Action"
        actions={[
          <SuccessIcon key="1" />,
          <InfoIcon key="2" />,
          <ErrorIcon key="3" />
        ]}
      >
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(".cuke-card-actions").length === 1);
    assert(wrapper.find(".cuke-card-actions-item").length === 3);
    assert(wrapper.find(SuccessIcon).length === 1);
    assert(wrapper.find(InfoIcon).length === 1);
    assert(wrapper.find(ErrorIcon).length === 1);
  });

  it("should find custom extra", () => {
    const wrapper = shallow(
      <Card extra={<Button href="#">更多</Button>}>
        <div> 内容 1</div>
        <div> 内容 1</div>
        <div> 内容 1</div>
      </Card>
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should find custom content", () => {
    const wrapper = render(
      <Card title="标题" extra={<Button href="#">更多</Button>}>
        <div>内容1</div>
      </Card>
    );
    expect(wrapper.text()).toContain("标题更多内容1");
  });
});
