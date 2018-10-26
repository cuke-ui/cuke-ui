import React from "react";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Breadcrumb from "../index";

describe("<Breadcrumb/>", () => {
  it("should render Breadcrumb", () => {
    const wrapper = render(
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>模块</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom separator", () => {
    const wrapper = render(
      <Breadcrumb separator=">">
        <Breadcrumb.Item>黄瓜 ui</Breadcrumb.Item>
        <Breadcrumb.Item>面包屑</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">链接</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>导航</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
