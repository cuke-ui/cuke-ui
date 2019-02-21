import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "../index";
import { SuccessIcon, CloseCircleIcon } from "../../icon";

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
  it("should render prefix and suffix with input", () => {
    const wrapper = render(
      <div>
        <Input prefix={<SuccessIcon />} placeholder="请输入" />
        <Input
          suffix={<SuccessIcon />}
          placeholder="请输入"
          style={{ margin: "10px 0" }}
        />
        <Input
          prefix={<SuccessIcon />}
          suffix={<SuccessIcon />}
          placeholder="请输入"
        />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(".cuke-input-prefix")).toHaveLength(2);
    expect(wrapper.find(".cuke-input-suffix")).toHaveLength(2);
    expect(wrapper.find(".cuke-input-has-prefix")).toHaveLength(2);
    expect(wrapper.find(".cuke-input-has-suffix")).toHaveLength(2);
  });

  it("should render CloseCircleIcon", () => {
    const wrapper = shallow(
      <Input allowClear value={1} placeholder="请输入" />
    );

    expect(wrapper.find(CloseCircleIcon)).toHaveLength(1);
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

  it("should emit onChange events", () => {
    const onClear = jest.fn();
    const wrapper = shallow(
      <Input onClear={onClear} allowClear value={1} suffix={1} type="text" />
    );

    wrapper.find(".cuke-input-clear").simulate("click");
    expect(onClear).toHaveBeenCalled();
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

  it("should allow clear and render close icon when has value", () => {
    const wrapper = shallow(<Input allowClear placeholder="请输入" />);
    expect(wrapper.find(".cuke-input-clear")).toHaveLength(0);
    wrapper.setProps({
      value: 111
    });
    expect(wrapper.find(".cuke-input-clear")).toHaveLength(1);
    wrapper.setProps({
      allowClear: false,
      value: undefined
    });
    expect(wrapper.find(".cuke-input-clear")).toHaveLength(0);
  });

  it("should clear value when clear button clicked", () => {
    const wrapper = shallow(
      <Input allowClear placeholder="请输入" value={333} />
    );
    expect(wrapper.find(".cuke-input-clear")).toHaveLength(1);
    wrapper.setProps({ value: 111 });
    wrapper.find(".cuke-input-clear").simulate("click");
    setTimeout(() => {
      expect(wrapper.state().value).toBe("");
    });
  });

  it("should render input password", () => {
    const wrapper = render(<Input.Password placeholder="请输入" value={333} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(".cuke-input-password")).toHaveLength(1);
  });
});
