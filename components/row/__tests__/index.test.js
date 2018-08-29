import React from 'react';
import assert from 'power-assert';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Row from '../index';
import Col from '../../col';

describe('<Row/>', () => {
	it('should render a <Row/> components', () => {
		const wrapper = render(
			<Row>
				<Col span={12}></Col>
				<Col span={12}></Col>
			</Row>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should find cuke-row classnames', () => {
		const wrapper = render(
			<div>
				<Row>
					<Col span={12}>1</Col>
					<Col span={6}>2</Col>
					<Col span={2} offset={4}>3</Col>
				</Row>
			</div>
		);
		assert(wrapper.find('.cuke-row').length >= 1);
		assert(wrapper.find('.cuke-col-offset-4').length === 1);
		assert(wrapper.find('.cuke-col-6').length === 1);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
