import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import WordPad from "../index";

describe("<WordPad/>", () => {
  it("should render a <WordPad/> components", () => {
    const wrapper = render(<WordPad />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render custom style", () => {
    const wrapper = render(
      <WordPad
        width={200}
        height={200}
        strokeColor="#396"
        strokeWidth={3}
        style={{
          border: "1px solid #dcdcdc",
          margin: "10px 0"
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it.skip("should clear canvas when clear props is true", () => {
    const onClearComplete = jest.fn();
    const wrapper = shallow(
      <WordPad clear={true} onClearComplete={onClearComplete} />
    );

    wrapper.setProps({ clear: true }, () => {
      expect(wrapper).toHaveBeenCalled();
    });
  });
});
