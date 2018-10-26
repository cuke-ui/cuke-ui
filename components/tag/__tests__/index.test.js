import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tag from "../index";

describe("<Tag/>", () => {
  it("should render tag", () => {
    const wrapper = render(
      <div>
        <Tag>黄瓜 ui</Tag>
        <Tag type="primary">黄瓜 ui</Tag>
        <Tag type="info">黄瓜 ui</Tag>
        <Tag type="success">黄瓜 ui</Tag>
        <Tag type="error">黄瓜 ui</Tag>
        <Tag type="warning">黄瓜 ui</Tag>
        <Tag dashed>黄瓜 ui</Tag>
        <Tag disabled>黄瓜 ui</Tag>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip("should find cuke-tag classnames", () => {
    const wrapper = shallow(
      <div>
        <Tag>黄瓜 ui</Tag>
        <Tag type="primary">黄瓜 ui</Tag>
        <Tag type="info">黄瓜 ui</Tag>
        <Tag type="success">黄瓜 ui</Tag>
        <Tag type="error">黄瓜 ui</Tag>
        <Tag type="warning">黄瓜 ui</Tag>
        <Tag dashed>黄瓜 ui</Tag>
        <Tag disabled>黄瓜 ui</Tag>
      </div>
    );
    assert(wrapper.find(".cuke-tag").length >= 1);
    assert(wrapper.find(".cuke-tag-primary").length === 1);
    assert(wrapper.find(".cuke-tag-info").length === 1);
    assert(wrapper.find(".cuke-tag-success").length === 1);
    assert(wrapper.find(".cuke-tag-error").length === 1);
    assert(wrapper.find(".cuke-tag-warning").length === 1);
    assert(wrapper.find(".cuke-tag-dashed").length === 1);
    assert(wrapper.find(".cuke-tag-disabled").length === 1);
  });

  it("should render custom color", () => {
    const wrapper = shallow(
      <div>
        <Tag color="#666">黄瓜 ui</Tag>
        <Tag color="pink">黄瓜 ui</Tag>
        <Tag color="#f63">黄瓜 ui</Tag>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should can trigger click event", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Tag onClick={onClick}>黄瓜ui</Tag>);
    wrapper.find(".cuke-tag").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should can not trigger click event when disabled", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Tag onClick={onClick} disabled>
        黄瓜ui
			</Tag>
    );
    wrapper.find(".cuke-tag").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should can trigger onClose event when clicked", () => {
    const onClick = jest.fn();
    const onClose = jest.fn();
    const wrapper = shallow(
      <Tag onClick={onClick} onClose={onClose}>
        黄瓜ui
			</Tag>
    );
    wrapper.find(".cuke-tag").simulate("click");
    expect(onClick).toHaveBeenCalled();
    setTimeout(() => {
      expect(onClose).toHaveBeenCalled();
    }, 200);
  });
});
