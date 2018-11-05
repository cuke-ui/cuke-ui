import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Checkbox from "../index";

describe("<Checkbox/>", () => {
  it("should render Checkbox", () => {
    const wrapper = render(
      <div>
        <Checkbox>黄瓜 ui</Checkbox>
        <Checkbox disabled>黄瓜 ui</Checkbox>
        <Checkbox checked disabled />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render cuke-checkbox classnames", () => {
    const wrapper = render(
      <div>
        <Checkbox>黄瓜 ui</Checkbox>
        <Checkbox disabled>黄瓜 ui</Checkbox>
        <Checkbox checked disabled />
      </div>
    );
    assert(wrapper.find(".cuke-checkbox").length === 3);
    assert(wrapper.find(".cuke-checkbox-disabled").length === 2);
    assert(wrapper.find(".cuke-checkbox-checked").length === 1);
  });
  it("should can trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Checkbox onChange={onChange}>黄瓜 ui</Checkbox>);
    wrapper.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should can not trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Checkbox onChange={onChange} disabled>
        黄瓜 ui
      </Checkbox>
    );
    wrapper.find("input").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
});
