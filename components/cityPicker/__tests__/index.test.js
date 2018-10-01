import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CityPicker from "../index";
import Input from "../../input";
import CityPickerCore from "../CityPickerCore";

describe("<CityPicker/>", () => {
	it("should render CityPicker", () => {
		const wrapper = render(<CityPicker />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should render Input when render CityPicker", () => {
		const wrapper = shallow(<CityPicker />);
		assert(wrapper.find(Input).length === 1);
	});

	it("should render CityPickerCore when render CityPicker", () => {
		const wrapper = shallow(<CityPicker />);
		assert(wrapper.find(CityPickerCore).length === 1);
	});

	it("should render cuke-city-picker classnames", () => {
		const wrapper = shallow(<CityPicker />);
		assert(wrapper.find(".cuke-city-picker").length === 1);
	});

	it("should render cuke-city-picker-core classnames", () => {
		const wrapper = shallow(<CityPickerCore />);
		assert(wrapper.find(".cuke-city-picker-core").length === 1);
	});
});
