import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NumberInput from "../index";

describe("<NumberInput/>", () => {
  it("should render NumberInput", () => {
    const wrapper = render(
      <div>
        <NumberInput />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render addon with input", () => {
    const wrapper = render(
      <div>
        <NumberInput addonBefore={"www"} placeholder="请输入" />
        <NumberInput addonAfter={".com"} placeholder="填写网址" />
        <NumberInput
          addonBefore={"https://"}
          addonAfter={".cn"}
          placeholder="www.lijinke"
        />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should emit onChange events", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <div>
        <NumberInput onChange={onChange} type="text" />
      </div>
    );
    setTimeout(() => {
      wrapper.find("input").simulate("change");
      expect(onChange).toHaveBeenCalled();
    }, 20);
  });
});
