import React from "react";
import { render, shallow } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Collapse from "../index";

describe("<Collapse/>", () => {
	it("should render Collapse", () => {
		const wrapper = render(
			<Collapse>
				<Collapse.Item title="标题1">内容1</Collapse.Item>
				<Collapse.Item title="标题2">内容2</Collapse.Item>
			</Collapse>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-collapse class name", () => {
		const wrapper = shallow(
			<Collapse>
				<Collapse.Item title="标题1">内容1</Collapse.Item>
				<Collapse.Item title="标题2">内容2</Collapse.Item>
			</Collapse>
		);
		assert(wrapper.find(".cuke-collapse").length === 1);
	});
});
