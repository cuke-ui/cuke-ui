import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import TurnTable from "../index";

const prizes = new Array(8).fill(0).map((_, i) => `奖品${i + 1}`);

describe("<TurnTable/>", () => {
  it("should render a <TurnTable/> components", () => {
    const wrapper = render(<TurnTable prizes={prizes} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-turn-table classnames", () => {
    const wrapper = shallow(<TurnTable prizes={prizes} />);
    assert(wrapper.find(".cuke-turn-table").length === 1);
  });

  it("should render the custom config", () => {
    const wrapper = render(
      <TurnTable prizes={prizes} clickText="我要抽奖" prefixCls="custom" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
