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
        <CountDown
          defaultCountDown={"2029/5/30 18:45:06"}
          type="date"
        />
        <CountDown
          defaultCountDown={1559100698744}
          type="date"
          autoStart
        >
          {
            (time) => (
              <div >
                {time.d}
                {time.h}
                {time.m}
                {time.s}
              </div>
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

    setTimeout(() => {
      expect(onEnd).toHaveBeenCalled();
    }, 5000)
  });


  it("should trigger onChange when start count down", () => {
    const onChange = jest.fn();
    shallow(
      <CountDown
        defaultCountDown={5}
        onChange={onChange}
      />
    );

    setTimeout(() => {
      expect(onChange).toHaveBeenCalledTimes(5);
    }, 5000)
  });


  it("should cannot trigger onClick with Button when start count down", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <CountDown autoStart>
        {
          (time, disabled) => (
            <Button disabled={disabled}>获取验证码</Button>
          )
        }
      </CountDown>
    );

    wrapper.find(Button).simulate('click')

    expect(onClick).not.toHaveBeenCalled();
  });


  it("should reset countDown interval when count down changed", () => {
    const onEnd = jest.fn();
    const wrapper = shallow(
      <CountDown countDown={5} onEnd={onEnd} />
    );

    wrapper.setProps({ countDown: 6 })

    setTimeout(() => {
      expect(onEnd).toHaveBeenCalled();
    }, 6000)
  });

  it("should reset countDown interval with Button when count down changed", () => {
    const onEnd = jest.fn();
    shallow(
      <CountDown countDown={5} interval={2} onEnd={onEnd} />
    );

    setTimeout(() => {
      expect(onEnd).toHaveBeenCalled();
    }, 5000 * 2)
  });

});
