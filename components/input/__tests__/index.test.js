import React from "react";
import { render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Input from "../index";

describe("<Input/>", () => {
	it("should render Input", () => {
		const wrapper = render(
			<div>
				<Input type="text" />
				<Input type="password" placeholder="请输入" />
				<Input type="number" placeholder="请输入" />
				<Input disabled placeholder="禁用" />
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render addon with input", () => {
		const wrapper = render(
			<div>
				<Input addonBefore={"www"} placeholder="请输入" />
				<Input addonAfter={".com"} placeholder="填写网址" />
				<Input
					addonBefore={"https://"}
					addonAfter={".cn"}
					placeholder="www.lijinke"
				/>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should emit onChange events", () => {
		const onChange = jest.fn();
		const wrapper = mount(
			<div>
				<Input onChange={onChange} type="text" />
			</div>
		);

		wrapper.find("input").simulate("change");
		expect(onChange).toHaveBeenCalled();
	});
});
