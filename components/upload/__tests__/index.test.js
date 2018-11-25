import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Upload from "../index";

describe("<Upload/>", () => {
  it("should render a <Upload/> components", () => {
    const wrapper = render(<Upload />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
