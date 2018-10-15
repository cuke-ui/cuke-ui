import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import DataPicker from "../index";

describe("<DataPicker/>", () => {
	it("should render a <Select/> components", () => {
		const wrapper = render(<DataPicker />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it("should render find .cuke-date-picker classnames", () => {
		const wrapper = shallow(<DataPicker />);
		assert(wrapper.find(".cuke-date-picker").length === 1);
	});
});
