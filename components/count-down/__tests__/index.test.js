import React from "react";
import { render, shallow } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import CountDown from "../index";
import Button from "../../button";

describe("<CountDown/>", () => {
  it("should render CountDown", () => {
    const wrapper = render(
      <div>
        <CountDown />
        <CountDown>
          {
            (time, disabled) => (
              <Button disabled={disabled}>{disabled ? `${time} s 后重获` : '点击获取验证码'}</Button>
            )
          }
        </CountDown>
      </div>

    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-count-down class name", () => {
    const wrapper = shallow(
      <CountDown />
    );
    assert(wrapper.find(".cuke-count-down").length === 1);
  });

  it("should render custom children", () => {
    const wrapper = shallow(
      <CountDown>
        {
          (time, disabled) => (
            <Button disabled={disabled}>{disabled ? `${time} s 后重获` : '点击获取验证码'}</Button>
          )
        }
      </CountDown>
    );
    assert(wrapper.find(Button).length === 1);
  });

  it("should trigger onStart & onEnd handler", () => {
    const onStart = jest.fn();
    const onEnd = jest.fn();
    shallow(
      <CountDown
        defaultCountDown={5}
        onStart={onStart}
        onEnd={onEnd}
      />
    );
    expect(onStart).toHaveBeenCalled();
    expect(onEnd).not.toHaveBeenCalled();

    setTimeout(()=>{
      expect(onEnd).toHaveBeenCalled();
    },5000)
  });


  it("should trigger onChange when start count down", () => {
    const onChange = jest.fn();
    shallow(
      <CountDown
        defaultCountDown={5}
        onChange={onChange}
      />
    );

    setTimeout(()=>{
      expect(onChange).toHaveBeenCalledTimes(5);
    },5000)
  });


  it("should cannot trigger onClick with Button when start count down", () => {
    const onClick = jest.fn();
    const wrapper= shallow(
      <CountDown autoStart>
      {
        (time,disabled) => (
          <Button disabled={disabled}>获取验证码</Button>
        )
      }
    </CountDown>
    );

    wrapper.find(Button).simulate('click')

    expect(onClick).not.toHaveBeenCalled();
  });
});
