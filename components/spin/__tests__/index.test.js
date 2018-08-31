import React from "react";
import assert from "power-assert";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Spin from "../index";

describe("<Spin/>", () => {
	it("should render a <Spin/> components", () => {
		const wrapper = render(
			<div>
				<Spin />
				<Spin tip="spin" />
				<Spin indicator="spin" />
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render more size width <Spin/> ", () => {
		const wrapper = render(
			<div>
				<Spin />
				<Spin size="small" />
				<Spin size="large" />
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-spin classnames", () => {
		const wrapper = mount(
			<div>
				<Spin />
				<Spin size="small" />
				<Spin size="large" />
				<Spin tip="加载中">
					<div>哈哈</div>
				</Spin>
			</div>
		);
		assert(wrapper.find(".cuke-spin").length >= 1);
		assert(wrapper.find(".cuke-spin-container").length >= 1);
		assert(wrapper.find(".cuke-spin-tip").length >= 1);
		assert(wrapper.find(".cuke-spin-blur").length >= 1);
		assert(wrapper.find(".cuke-spin-small").length >= 1);
		assert(wrapper.find(".cuke-spin-large").length >= 1);
	});
});
