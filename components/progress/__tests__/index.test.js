import React from "react";
import assert from "power-assert";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Progress from "../index";

describe("<Progress/>", () => {
	it("should render a <Progress/> components", () => {
		const wrapper = render(
			<div>
				<Progress percent={70}/>

				<Progress percent={70} animation={false}/>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render five type width <Progress/> ", () => {
		const wrapper = render(
			<div>
				<Progress percent={20} type="default"/>
				<Progress percent={30} type="success"/>
				<Progress percent={40} type="info"/>
				<Progress percent={50} type="warning"/>
				<Progress percent={60} type="error"/>

				<Progress percent={20} type="default" animation={false}/>
				<Progress percent={30} type="success" animation={false}/>
				<Progress percent={40} type="info" animation={false}/>
				<Progress percent={50} type="warning" animation={false}/>
				<Progress percent={60} type="error" animation={false}/>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-progress classnames", () => {
		const wrapper = render(
			<div>
				<Progress percent={20} />
				<Progress percent={20} animation={false}/>
			</div>
		);
		assert(wrapper.find(".cuke-progress").length >= 1);
		assert(wrapper.find(".cuke-progress-enter").length >= 1);
		assert(wrapper.find(".cuke-progress-bg-animation").length === 1);
		assert(wrapper.find(".cuke-progress-bg").length >= 1);
	});
});
