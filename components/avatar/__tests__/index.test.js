import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Avatar from "../index";
import { UserIcon } from "../../icon";

describe("<Avatar/>", () => {
  it("should render a <Avatar/> components", () => {
    const wrapper = render(
      <div>
        <Avatar icon={<UserIcon />} />
        <Avatar text="黄瓜ui" />
        <Avatar src="https://www.test.jpg" />
        <Avatar icon={<UserIcon />} />
        <Avatar icon={<UserIcon />} shape="square" />
        <Avatar text="大" size="large" />
        <Avatar text="中" />
        <Avatar text="小" size="small" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-avatar classnames", () => {
    const wrapper = render(
      <div>
        <Avatar icon={<UserIcon />} />
        <Avatar text="黄瓜ui" />
        <Avatar text="黄瓜ui" shape="square" />
        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
        <Avatar text="黄瓜ui" size="small" />
        <Avatar text="黄瓜ui" size="large" />
      </div>
    );
    assert(wrapper.find(".cuke-avatar").length >= 1);
    assert(wrapper.find(".cuke-avatar-circle").length >= 1);
    assert(wrapper.find(".cuke-avatar-square").length === 1);
    assert(wrapper.find(".cuke-avatar-icon").length === 1);
    assert(wrapper.find(".cuke-avatar-text").length >= 1);
    assert(wrapper.find(".cuke-avatar-image").length === 1);
    assert(wrapper.find(".cuke-avatar-size-small").length === 1);
    assert(wrapper.find(".cuke-avatar-size-large").length === 1);
  });

  it("should render a icon", () => {
    const wrapper = shallow(<Avatar icon={<UserIcon />} />);
    assert(wrapper.find(".cuke-avatar-icon").length === 1);
    assert(wrapper.find(UserIcon).length === 1);
  });

  it("should render a image", () => {
    const src = "https://www.test.png";
    const wrapper = shallow(<Avatar src={src} alt="user" />);
    assert(wrapper.find(".cuke-avatar-image").length === 1);
    assert(wrapper.find("img").length === 1);
  });

  it("should render a text", () => {
    const wrapper = shallow(<Avatar text="user" />);
    assert(wrapper.find(".cuke-avatar-text").length === 1);
    assert(wrapper.find("span").length >= 1);
    expect(wrapper.text()).toEqual("user");
  });
});
