import React from "react";
import { render, shallow, mount } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Modal from "../index";
import Button from "../../button";

describe("<Modal/>", () => {
  it("should render a <Modal/> components", () => {
    const wrapper = render(
      <div>
        <Modal title="基本使用" visible>
          <span>基本使用</span>
        </Modal>
        <Modal title="基本使用" okText="ok" cancelText="cancel" visible>
          <span>自定义文本 </span>
        </Modal>
        <Modal title="基本使用" visible footer={null}>
          <span>无 footer</span>
        </Modal>
        <Modal title="基本使用" visible closable centered>
          <span>居中</span>
        </Modal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render custom footer width <Modal/> ", () => {
    const wrapper = render(
      <Modal
        title="基本使用"
        visible
        footer={[<a key="cancel">取消</a>, <a key="confirm">确定</a>]}
      >
        <span> 其实我是高仿 ant-design 的 </span>
      </Modal>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render default Button", () => {
    const wrapper = shallow(
      <Modal title="基本使用" visible>
        <span>基本使用</span>
      </Modal>
    );
    assert(wrapper.find(Button).length === 2);
  });

  it("should render custom ok button props", () => {
    const wrapper = render(
      <Modal visible okButtonProps={{ disabled: true }}>
        <span>基本使用</span>
      </Modal>
    );
    assert(wrapper.find(".cuke-button.btn-disabled").length === 1);
  });

  it("should render custom cancel button props", () => {
    const wrapper = render(
      <Modal visible cancelButtonProps={{ disabled: true }}>
        <span>基本使用</span>
      </Modal>
    );
    assert(wrapper.find(".cuke-button.btn-disabled").length === 1);
  });

  it("should render destroy reference", () => {
    const modal = Modal.confirm();
    assert(modal.destroy && modal.destroy instanceof Function);
  });

  it("should render confirm mode width <Modal/> ", () => {
    const wrapper = render(
      <Modal
        className="cuke-modal-confirm"
        showMask={false}
        closable={false}
        visible
      >
        <p>confirm</p>
      </Modal>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip("should can not clicked with set maskClosable false", () => {
    const onCancelClick = jest.fn();
    const wrapper = mount(
      <Modal footer={null} visible={true} onCancel={onCancelClick}>
        <span>关闭回调</span>
      </Modal>
    );
    wrapper.find(".cuke-modal").simulate("click");
    assert(wrapper.props().visible === true);
    expect(onCancelClick).not.toHaveBeenCalled();
  });

  it("should can trigger onClose event", () => {
    const onClick = jest.fn();
    const onCancelClick = jest.fn();
    const wrapper = shallow(
      <Modal title="关闭回调" visible onOk={onClick} onCancel={onCancelClick}>
        <span>关闭回调</span>
      </Modal>
    );
    wrapper.find(".cuke-modal").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
    expect(onCancelClick).not.toHaveBeenCalled();
  });
});
