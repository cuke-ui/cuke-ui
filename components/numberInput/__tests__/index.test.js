import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NumberInput, {
  getCleanString,
  getTheValueLengthAfterTheDecimalPoint
} from "../index";
import Input from "../../input";

describe("<NumberInput/>", () => {
  it("should render NumberInput", () => {
    const wrapper = render(<NumberInput />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should emit onChange events", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChange} />);
    setTimeout(() => {
      wrapper.find(".cuke-number-input").simulate("change");
      expect(onChange).toHaveBeenCalled();
    }, 20);
  });

  it("should cannot emit onChange events when disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChange} disabled />);
    setTimeout(() => {
      wrapper.find(".cuke-number-input").simulate("change");
      expect(onChange).not.toHaveBeenCalled();
    }, 20);
  });
  it("should can emit onChange events", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChange} />);
    wrapper.find(Input).simulate("change", { target: { value: 2 } });
    expect(onChange).toHaveBeenCalled();
  });
  it("should return three value when set new value", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChange} value={1} />);
    wrapper.setProps({
      value: 3
    });
    wrapper.update();
    expect(wrapper.state().value).toEqual("3");
  });

  it("should cannot emit onChange events when stepper disabled", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <NumberInput showStepper onChange={onChange} disabled />
    );
    setTimeout(() => {
      wrapper.find(".cuke-input-group-addon").simulate("click");
      expect(onChange).not.toHaveBeenCalled();
    }, 20);
  });

  it("should render custom step", () => {
    const wrapper = shallow(<NumberInput value={1} showStepper step={2} />);
    setTimeout(() => {
      wrapper
        .find(".cuke-number-input-stepper")
        .at(1)
        .simulate("click");
      expect(wrapper.state().value).toBe(3);
    }, 20);
  });

  it("should render disabled subtract button when showStepper is true and disabled", () => {
    const wrapper = shallow(<NumberInput value={2} min={1} showStepper />);
    setTimeout(() => {
      wrapper
        .find(".cuke-number-input-stepper")
        .at(0)
        .simulate("click");
      assert(
        wrapper.find(".cuke-number-input-stepper.cuke-number-input-disabled")
          .length === 1
      );
    }, 20);
  });

  it("should render disabled add button when showStepper is true and disabled", () => {
    const wrapper = shallow(<NumberInput value={2} max={3} showStepper />);
    setTimeout(() => {
      wrapper
        .find(".cuke-input-group-addon")
        .at(1)
        .simulate("click");
      assert(
        wrapper.find(".cuke-number-input-stepper.cuke-number-input-disabled")
          .length === 1
      );
    }, 20);
  });

  it("getTheValueLengthAfterTheDecimalPoint", () => {
    assert(getTheValueLengthAfterTheDecimalPoint("19.222", 2) === "19.22");
    assert(getTheValueLengthAfterTheDecimalPoint("199", 2) === "199");
    assert(
      getTheValueLengthAfterTheDecimalPoint("19.222.222.22", 2) ===
        "19.22.22.22"
    );
  });

  it("should get clean string", () => {
    assert(getCleanString(123) === "123");
    assert(getCleanString("123") === "123");
    assert(getCleanString("123abc") === "123");
    assert(getCleanString("123abc.3") === "123.3");
    assert(getCleanString([]) === "");
  });

  it("should call getValue", () => {
    const numberInput = new NumberInput({}, {});
    expect(numberInput.getValue()).toEqual(NaN);
  });
});
