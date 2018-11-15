import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Message from "../index";

describe("<Message/>", () => {
  it("should render a <Message/> components", () => {
    const wrapper = render(
      <div>
        <Message title="哈哈" type="success" />
        <Message title="哈哈" type="error" />
        <Message title="哈哈" type="info" />
        <Message title="哈哈" type="warning" />
        <Message title="哈哈" type="loading" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-message classnames", () => {
    const wrapper = shallow(<Message title="哈哈" type="success" />);
    assert(wrapper.find(".cuke-message").length === 1);
  });

  it("should find cuke-message-success when call static method", () => {
    const wrapper = shallow(<Message title="哈哈" type="success" />);
    assert(wrapper.find(".cuke-message-success").length === 1);
  });

  it("should find cuke-message-error when call static method", () => {
    const wrapper = shallow(<Message title="哈哈" type="error" />);
    assert(wrapper.find(".cuke-message-error").length === 1);
  });

  it("should find cuke-message-info when call static method", () => {
    const wrapper = shallow(<Message title="哈哈" type="info" />);
    assert(wrapper.find(".cuke-message-info").length === 1);
  });

  it("should find cuke-message-warning when call static method", () => {
    const wrapper = shallow(<Message title="哈哈" type="warning" />);
    assert(wrapper.find(".cuke-message-warning").length === 1);
  });
  it("should find cuke-message-loading when call static method", () => {
    const wrapper = shallow(<Message title="哈哈" type="loading" />);
    assert(wrapper.find(".cuke-message-loading").length === 1);
  });

  it("should disabled scroll when did update", () => {
    const wrapper = shallow(<Message title="哈哈" type="loading" />);
    wrapper.update();
    assert(document.body.style.overflow === "");
  });

  it("should render destroy reference", () => {
    const message = Message.success();
    assert(message.destroy && message.destroy instanceof Function);
  });

  it("should cannot find <Message/> when destroy", () => {
    const message = Message.success();
    message.destroy();
    setTimeout(() => {
      assert(document.querySelector(".cuke-message").length === 0);
    }, 10);
  });

  it("should 2s ago emit callback", () => {
    const wrapper = shallow(
      <Message
        title="哈哈"
        type="success"
        duration={2}
        onClose={() => wrapper.setProps({ title: "回调" })}
      />
    );

    setTimeout(() => {
      assert(wrapper.props().title === "回调");
    }, 2000);
  });

  it("should render <Message/> when call message static success method", () => {
    Message.success();
    setTimeout(() => {
      assert(document.querySelector(".cuke-message-success").length === 1);
    }, 10);
  });
  it("should render <Message/> when call message static error method", () => {
    Message.error();
    setTimeout(() => {
      assert(document.querySelector(".cuke-message-error").length === 1);
    }, 10);
  });
  it("should render <Message/> when call message static warning method", () => {
    Message.warning();
    setTimeout(() => {
      assert(document.querySelector(".cuke-message-warning").length === 1);
    }, 10);
  });
  it("should render <Message/> when call message static loading method", () => {
    Message.loading();
    setTimeout(() => {
      assert(document.querySelector(".cuke-message-success").length === 1);
    }, 10);
  });
  it("should render <Message/> when call message static info method", () => {
    Message.info();
    setTimeout(() => {
      assert(document.querySelector(".cuke-message-info").length === 1);
    }, 10);
  });
});
