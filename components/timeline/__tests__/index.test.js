import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Timeline from "../index";

describe("<Timeline/>", () => {
  it("should render Timeline", () => {
    const wrapper = render(
      <Timeline>
        <Timeline.Item>三天前 lol 中国队亚运会夺冠</Timeline.Item>
        <Timeline.Item>目前已回到国内备战s8</Timeline.Item>
        <Timeline.Item>接下来是LPL 季后赛</Timeline.Item>
        <Timeline.Item>目前 RNG, RW, IG 最后可能进入 S8</Timeline.Item>
      </Timeline>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-timeline classnames", () => {
    const wrapper = shallow(
      <Timeline>
        <Timeline.Item type="info">信息</Timeline.Item>
        <Timeline.Item type="error">错误</Timeline.Item>
        <Timeline.Item type="warning">警告</Timeline.Item>
        <Timeline.Item type="disabled">禁用</Timeline.Item>
        <Timeline.Item type="loading">EDG.Clearlove9 正在连接...</Timeline.Item>
      </Timeline>
    );
    assert(wrapper.find(".cuke-timeline").length === 1);
  });

  it("should render custom type", () => {
    const wrapper = render(
      <Timeline>
        <Timeline.Item type="info">信息</Timeline.Item>
        <Timeline.Item type="error">错误</Timeline.Item>
        <Timeline.Item type="warning">警告</Timeline.Item>
        <Timeline.Item type="disabled">禁用</Timeline.Item>
        <Timeline.Item type="loading">EDG.Clearlove9 正在连接...</Timeline.Item>
      </Timeline>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom color", () => {
    const wrapper = render(
      <Timeline>
        <Timeline.Item color="#654">三天前 lol 中国队亚运会夺冠</Timeline.Item>
        <Timeline.Item color="yellow">目前已回到国内备战s8</Timeline.Item>
        <Timeline.Item color="green">接下来是LPL 季后赛</Timeline.Item>
        <Timeline.Item color="#f63">
          目前 RNG, RW, IG 最后可能进入 S8
				</Timeline.Item>
      </Timeline>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom animate", () => {
    const wrapper = render(
      <div>
        <Timeline animate="slideLeft">
          <Timeline.Item>1</Timeline.Item>
          <Timeline.Item>2</Timeline.Item>
        </Timeline>
        <Timeline animate="slideRight">
          <Timeline.Item>1</Timeline.Item>
          <Timeline.Item>2</Timeline.Item>
        </Timeline>
        <Timeline animate="slideUp">
          <Timeline.Item>1</Timeline.Item>
          <Timeline.Item>2</Timeline.Item>
        </Timeline>
        <Timeline animate="slideBottom">
          <Timeline.Item>1</Timeline.Item>
          <Timeline.Item>2</Timeline.Item>
        </Timeline>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
