import React from 'react';
import { render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from '../index';

describe('<Modal/>', () => {
	it('should render a <Modal/> components', () => {
		const wrapper = render(
			<div>
				<Modal title="基本使用" visible>
					<p>基本使用</p>
				</Modal>
				<Modal title="基本使用" okText="ok" cancelText="cancel" visible>
					<p>自定义文本 </p>
				</Modal>
				<Modal title="基本使用" visible footer={null}>
					<p>无 footer</p>
				</Modal>
				<Modal title="基本使用" visible closable centered>
					<p>居中</p>
				</Modal>
			</div>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render custom footer width <Modal/> ', () => {
		const wrapper = render(
			<Modal
				title="基本使用"
				visible
				footer={[<a key="cancel">取消</a>, <a key="confirm">确定</a>]}
			>
				<p> 其实我是高仿 ant-design 的 </p>
			</Modal>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should can trigger onClose event', () => {
		const onClick = jest.fn();
		const onCancelClick = jest.fn();
		const wrapper = shallow(
			<Modal title="关闭回调" visible onOk={onClick} onCancel={onCancelClick}>
				<p>关闭回调</p>
			</Modal>
		);
		wrapper.find('.cuke-modal').simulate('click');
		expect(onClick).not.toHaveBeenCalled();
		expect(onCancelClick).not.toHaveBeenCalled();
	});
});
