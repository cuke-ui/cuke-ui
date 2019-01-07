import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "../index";

describe("<Input/>", () => {
  it("should render Input", () => {
    const wrapper = render(
      <div>
        <Input type="text" />
        <Input type="password" placeholder="请输入" />
        <Input type="number" placeholder="请输入" />
        <Input readonly value="我是只读" />
        <Input disabled placeholder="禁用" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render addon with input", () => {
    const wrapper = render(
      <div>
        <Input addonBefore={"www"} placeholder="请输入" />
        <Input addonAfter={".com"} placeholder="填写网址" />
        <Input
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
    const wrapper = shallow(<Input onChange={onChange} type="text" />);

    wrapper.find(".cuke-input").simulate("change", {
      persist: () => {},
      target: {
        value: null
      }
    });
    expect(onChange).toHaveBeenCalled();
  });

  it("should render custom size", () => {
    const wrapper = render(
      <div>
        <Input placeholder="small" size="small" />
        <Input placeholder="default" />
        <Input placeholder="large" size="large" />
      </div>
    );
    expect(wrapper.find(".cuke-input-small").length === 1);
    expect(wrapper.find(".cuke-input-large").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should set new state when props value update", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Input onChange={onChange} type="text" value={1} />
    );

    expect(wrapper.state().value).toBe(1);
    wrapper.setProps({
      value: 3
    });
    expect(wrapper.state().value).toBe(3);
  });
});
