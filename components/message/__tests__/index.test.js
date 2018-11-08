import React from "react";
import assert from "power-assert";
import { render, shallow, mount } from "enzyme";
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
    assert(wrapper.find(".message-success").length === 1);
  });

  it("should render destroy reference", () => {
    const message = Message.success();
    assert(message.destroy && message.destroy instanceof Function);
  });

  it.skip("should 2s ago emit callback", () => {
    const wrapper = mount(
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
});
