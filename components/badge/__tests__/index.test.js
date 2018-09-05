import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Badge from "../index";

describe("<Badge/>", () => {
	it("should render a <Badge/> components", () => {
		const wrapper = render(
			<div>
				<Badge count={10}>哈哈</Badge>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-badge classnames", () => {
		const wrapper = render(
			<div>
				<Badge count={10}>哈哈</Badge>
				<Badge count={10} dot>
					哈哈
				</Badge>
			</div>
		);
		assert(wrapper.find(".cuke-badge").length >= 1);
		assert(wrapper.find(".cuke-badge-inner").length >= 1);
		assert(wrapper.find(".cuke-badge-dot").length === 1);
	});

	it("should not render inner width showZero false", () => {
		const wrapper = render(
			<div>
				<Badge count={0} showZero={false}>
					哈哈
				</Badge>
			</div>
		);
		assert(wrapper.find(".cuke-badge-inner").length === 0);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it("should can trigger onClick event", () => {
		const onClick = jest.fn();
		const wrapper = shallow(
			<Badge count={10} onClick={onClick}>
				哈哈
			</Badge>
		);
		wrapper.find(".cuke-badge-inner").simulate("click");
		expect(onClick).toHaveBeenCalled();
	});
});
