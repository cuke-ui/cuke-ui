import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import WordPad from "../index";

describe("<WordPad/>", () => {
  it("should render a <WordPad/> components", () => {
    const wrapper = render(<WordPad />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
