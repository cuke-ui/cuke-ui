import React from "react";
import assert from "power-assert";
import { render } from "enzyme";
import toJson from "enzyme-to-json";
import Container from "../index";

describe("<Container/>", () => {
	it("should render a <Container/> components", () => {
		const wrapper = render(
			<div>
				<Container>默认1200px 居中</Container>

				<Container width={200}>200px 居中</Container>

				<Container width={500} center>
					内容垂直水平居中
				</Container>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("should find cuke-container classnames", () => {
		const wrapper = render(
			<div>
				<Container>默认1200px 居中</Container>

				<Container width={500} center>
					内容垂直水平居中
				</Container>
			</div>
		);
		assert(wrapper.find(".cuke-container").length >= 1);
		assert(wrapper.find(".cuke-container-centered").length === 1);
	});
});
