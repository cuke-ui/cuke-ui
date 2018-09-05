import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Radio from "../index";

describe("<Radio/>", () => {
	it("should render Radio", () => {
		const wrapper = render(
			<div>
				<Radio>黄瓜 ui</Radio>
				<Radio disabled>黄瓜 ui</Radio>
				<Radio checked disabled />
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render RadioGroup", () => {
		const wrapper = render(
			<div>
				<Radio.Group value={"小红"}>
					<Radio value="小红">小红</Radio>
					<Radio value="小明">小明</Radio>
					<Radio value="小美">小美</Radio>
					<Radio value="小芳">小芳</Radio>
					<Radio value="小黑" disabled>
						小黑
					</Radio>
				</Radio.Group>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	// it('should trigger change event width RadioGroup', () => {
	// 	const onChange = jest.fn();
	// 	const wrapper = shallow(
	// 		<Radio.Group value={'小红'} onChange={onChange}>
	// 			<Radio value="小红">小红</Radio>
	// 			<Radio value="小明">小明</Radio>
	// 			<Radio value="小美">小美</Radio>
	// 			<Radio value="小芳">小芳</Radio>
	// 		</Radio.Group>
	// 	);
	// 	wrapper.find('input').simulate('change');
	// 	expect(onChange).toHaveBeenCalled();
	// });
	it("should can trigger change event", () => {
		const onChange = jest.fn();
		const wrapper = shallow(<Radio onChange={onChange}>黄瓜 ui</Radio>);
		wrapper.find("input").simulate("change");
		expect(onChange).toHaveBeenCalled();
	});
	it("should can not trigger change event", () => {
		const onChange = jest.fn();
		const wrapper = shallow(
			<Radio onChange={onChange} disabled>
				黄瓜 ui
			</Radio>
		);
		wrapper.find("input").simulate("click");
		expect(onChange).not.toHaveBeenCalled();
	});
});
