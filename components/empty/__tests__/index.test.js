import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Empty from "../index";
import Button from "../../button";
import { ErrorIcon } from "../../icon";

describe("<Empty/>", () => {
  it("should render a <Empty/> components", () => {
    const wrapper = render(
      <div>
        <Empty />
        <Empty icon={<ErrorIcon />} description="这里空空如也" />
        <Empty icon={"🥒"} description="这里没有黄瓜">
          <Button type="primary">点击购买</Button>
        </Empty>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-empty classnames", () => {
    const wrapper = shallow(<Empty />);
    assert(wrapper.find(".cuke-empty").length >= 1);
    assert(wrapper.find(".cuke-empty-icon").length >= 1);
    assert(wrapper.find(".cuke-empty-description").length >= 1);
  });
  it("should render custom icon", () => {
    const wrapper = shallow(<Empty icon={<ErrorIcon />} />);
    assert(wrapper.find(ErrorIcon).length === 1);
  });

  it("should render custom description", () => {
    const wrapper = shallow(
      <Empty icon={<ErrorIcon />} description={<Button>自定义描述</Button>} />
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should render custom height", () => {
    const wrapper = render(<Empty height={500} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
