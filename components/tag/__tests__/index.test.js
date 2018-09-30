import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tag from "../index";

describe("<Tag/>", () => {
	it("should render tag", () => {
		const wrapper = render(
			<div>
				<Tag>黄瓜 ui</Tag>
				<Tag type="primary">黄瓜 ui</Tag>
				<Tag type="info">黄瓜 ui</Tag>
				<Tag type="success">黄瓜 ui</Tag>
				<Tag type="error">黄瓜 ui</Tag>
				<Tag type="warning">黄瓜 ui</Tag>
				<Tag dashed>黄瓜 ui</Tag>
				<Tag disabled>黄瓜 ui</Tag>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it.skip("should find cuke-tag classnames", () => {
		const wrapper = shallow(
			<div>
				<Tag>黄瓜 ui</Tag>
				<Tag type="primary">黄瓜 ui</Tag>
				<Tag type="info">黄瓜 ui</Tag>
				<Tag type="success">黄瓜 ui</Tag>
				<Tag type="error">黄瓜 ui</Tag>
				<Tag type="warning">黄瓜 ui</Tag>
				<Tag dashed>黄瓜 ui</Tag>
				<Tag disabled>黄瓜 ui</Tag>
			</div>
		);
		assert(wrapper.find(".cuke-tag").length >= 1);
		assert(wrapper.find(".cuke-tag-primary").length === 1);
		assert(wrapper.find(".cuke-tag-info").length === 1);
		assert(wrapper.find(".cuke-tag-success").length === 1);
		assert(wrapper.find(".cuke-tag-error").length === 1);
		assert(wrapper.find(".cuke-tag-warning").length === 1);
		assert(wrapper.find(".cuke-tag-dashed").length === 1);
		assert(wrapper.find(".cuke-tag-disabled").length === 1);
	});
});
