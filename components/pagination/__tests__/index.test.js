import Select from "../../select";
import React from "react";
import { render, shallow } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Pagination from "../index";
import Button from "../../button";
import { ArrowLeftIcon, ArrowRightIcon, SuccessIcon } from "../../icon";
import NumberInput from "../../number-input";

describe("<Pagination/>", () => {
  it("should render Pagination", () => {
    const wrapper = render(
      <div>
        <Pagination current={1} total={50} />
        <Pagination
          current={1}
          total={50}
          locale={{ prevText: "后退", nextText: "前进" }}
        />
        <Pagination current={1} total={50} showQuickJumper />
        <Pagination current={1} total={50} showSizeChanger />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render simple Pagination", () => {
    const wrapper = render(
      <Pagination current={1} total={10} simple separator="|" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render sizes", () => {
    const wrapper = render(
      <div>
        <Pagination current={1} total={50} size="small" showSizeChanger />
        <Pagination current={1} total={50} size="default" showSizeChanger />
        <Pagination current={1} total={50} size="large" showSizeChanger />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom separator", () => {
    const wrapper = shallow(
      <Pagination current={1} total={10} simple separator={<SuccessIcon />} />
    );
    expect(wrapper.find(SuccessIcon)).toHaveLength(1);
  });

  it("should find cuke-pagination classnames", () => {
    const wrapper = shallow(<Pagination current={1} total={10} />);
    assert(wrapper.find(".cuke-pagination").length === 1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-pagination-simple classnames when is simple mode", () => {
    const wrapper = shallow(<Pagination current={1} total={10} simple />);
    assert(wrapper.find(".cuke-pagination-simple").length === 1);
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

  it("should find default locale text", () => {
    const wrapper = shallow(<Pagination current={1} total={10} />);
    assert(wrapper.find(ArrowLeftIcon).length === 1);
    assert(wrapper.find(ArrowRightIcon).length === 1);
  });

  it("should emit onChange events", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Pagination onChange={onChange} current={2} total={50} />
    );

    wrapper.find(".cuke-pagination-prev").simulate("click");
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.state().current).toBe(1);

    wrapper.find(".cuke-pagination-next").simulate("click");
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.state().current).toBe(2);
  });

  it("should emit onChange events with simple mode", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Pagination simple onChange={onChange} current={1} total={10} />
    );

    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(onChange).toHaveBeenCalled();
  });

  it("should emit on click events with simple", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Pagination simple onChange={onChange} current={1} total={10} />
    );
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(wrapper.state().current).toBe(2);
  });

  it("should emit onChange events", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Pagination onChange={onChange} current={2} total={50} />
    );

    wrapper.find(".cuke-pagination-prev").simulate("click");
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.state().current).toBe(1);

    wrapper.find(".cuke-pagination-next").simulate("click");
    expect(onChange).toHaveBeenCalled();
    expect(wrapper.state().current).toBe(2);
  });

  it("should render 10 page button when pageSize is 5", () => {
    const wrapper = shallow(<Pagination pageSize={5} total={50} />);
    const prevAndNext = 2;
    expect(wrapper.find(".cuke-pagination-item")).toHaveLength(
      10 + prevAndNext
    );
  });
  it("should render 10 page button when pageSize is 5", () => {
    const wrapper = shallow(<Pagination pageSize={5} total={49} />);
    const prevAndNext = 2;
    expect(wrapper.find(".cuke-pagination-item")).toHaveLength(
      10 + prevAndNext
    );
  });
  it("should render show size changer selector", () => {
    const wrapper = shallow(
      <Pagination pageSize={5} total={49} showSizeChanger />
    );
    expect(wrapper.find(Select)).toHaveLength(1);
  });
  it("should render custom total", () => {
    const wrapper = shallow(
      <Pagination
        pageSize={5}
        total={49}
        showTotal={total => `共${total}条数据`}
      />
    );
    expect(wrapper.text()).toContain("共49条数据");
  });
  it("should trigger onChange", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Pagination pageSize={5} total={49} onChange={onChange} />
    );
    wrapper
      .find(".cuke-pagination-item")
      .at(2)
      .simulate("click");
    expect(onChange).toHaveBeenCalled();
  });
  it("should find quick jumper", () => {
    const wrapper = shallow(
      <Pagination pageSize={5} total={49} showQuickJumper />
    );
    expect(wrapper.find(NumberInput)).toHaveLength(1);
  });
});
