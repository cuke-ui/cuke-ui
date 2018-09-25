import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Switch from "../index";

describe("<Switch/>", () => {
	it("should render a <Switch/> components", () => {
		const wrapper = render(
			<div>
				<Switch />
				<Switch checkedChildren="♂" unCheckedChildren="♀" />
				<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-switch classnames", () => {
		const wrapper = render(
			<div>
				<Switch />
				<Switch disabled />
				<Switch loading />
				<Switch checkedChildren="♂" unCheckedChildren="♀" />
				<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
			</div>
		);
		assert(wrapper.find(".cuke-switch").length >= 1);
		assert(wrapper.find(".cuke-switch-checked").length === 1);
		assert(wrapper.find(".cuke-switch-disabled").length === 1);
		assert(wrapper.find(".cuke-switch-loading").length === 1);
	});

	it("should render sizes", () => {
		const wrapper = render(
			<div>
				<Switch />
				<Switch size="large" />
				<Switch size="small" />
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
		assert(wrapper.find(".cuke-switch-large").length === 1);
		assert(wrapper.find(".cuke-switch-small").length === 1);
	});

	it("should can trigger click event", () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Switch onChange={onClick} />);
		wrapper.find(".cuke-switch").simulate("click");
		expect(onClick).toHaveBeenCalled();
	});
	it("should can not trigger click event width disabled status", () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Switch onChange={onClick} disabled />);
		wrapper.find(".cuke-switch").simulate("click");
		expect(onClick).not.toHaveBeenCalled();
	});
	it("should can not trigger click event width loading status", () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Switch onChange={onClick} loading />);
		wrapper.find(".cuke-switch").simulate("click");
		expect(onClick).not.toHaveBeenCalled();
	});
});
