import React from "react";
import { render, shallow } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Pagination from "../index";

describe("<Pagination/>", () => {
  it("should render Pagination", () => {
    const wrapper = render(
      <div>
        <Pagination current={1} total={10} />
        <Pagination
          current={1}
          total={10}
          locale={{ prevText: "后退", nextText: "前进" }}
        />
        <Pagination current={1} total={10} separator="|" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-pagination classnames", () => {
    const wrapper = shallow(<Pagination current={1} total={10} />);
    assert(wrapper.find(".cuke-pagination").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find custom locale text", () => {
    const wrapper = render(
      <Pagination
        current={1}
        total={10}
        locale={{ prevText: "后退", nextText: "前进" }}
      />
    );
    expect(wrapper.text()).toContain("后退");
    expect(wrapper.text()).toContain("前进");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should emit onChange events", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <div>
        <Pagination onChange={onChange} current={1} total={10} />
      </div>
    );

    setTimeout(() => {
      wrapper.find("section").simulate("change");
      expect(onChange).toHaveBeenCalled();
    }, 20);
  });
});
