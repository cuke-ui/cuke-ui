import assert from "power-assert";
import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Affix from "../index";

describe("<Affix/>", () => {
  it("should render a <Affix/> components", () => {
    const wrapper = render(
      <div>
        <Affix>
          <div>affix</div>
        </Affix>
        <Affix offsetTop={200}>
          <div>affix</div>
        </Affix>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should find cuke-affix classnames", () => {
    const wrapper = render(
      <Affix>
        <div>affix</div>
      </Affix>
    );
    assert(wrapper.find(".cuke-affix").length >= 1);
  });
});
