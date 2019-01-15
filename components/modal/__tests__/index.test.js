import React from "react";
import { render, shallow } from "enzyme";
import assert from "power-assert";
import toJson from "enzyme-to-json";
import Modal from "../index";
import Button from "../../button";
import Input from "../../input";
import { ErrorIcon } from "../../icon";

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

  it("should cannot render when is not prompt static prompt", () => {
    const wrapper = shallow(
      <Modal title="基本使用" visible>
        <span>基本使用</span>
      </Modal>
    );
    assert(wrapper.find(Input).length === 0);
  });

  it("should render custom ok button props", () => {
    const wrapper = render(
      <Modal visible okButtonProps={{ disabled: true }}>
        <span>基本使用</span>
      </Modal>
    );
    assert(wrapper.find(".cuke-button.cuke-button-disabled").length === 1);
  });

  it("should render custom cancel button props", () => {
    const wrapper = render(
      <Modal visible cancelButtonProps={{ disabled: true }}>
        <span>基本使用</span>
      </Modal>
    );
    assert(wrapper.find(".cuke-button-disabled").length === 1);
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

  it("should can not clicked with set maskClosable false", () => {
    const onCancelClick = jest.fn();
    const wrapper = shallow(
      <Modal footer={null} visible={true} onCancel={onCancelClick}>
        <span>关闭回调</span>
      </Modal>
    );
    wrapper.find(".cuke-modal").simulate("click");
    expect(onCancelClick).not.toHaveBeenCalled();
  });

  it("should enable scroll and disabled scroll", () => {
    const wrapper = shallow(
      <Modal visible={false}>
        <span>1</span>
      </Modal>
    );
    wrapper.update();
    expect(document.body.style.paddingRight).toBe("");
    wrapper.setState({
      visible: true
    });
    wrapper.update();
    setTimeout(() => {
      expect(document.body.style.paddingRight).toBe("15px");
    });
  });

  it("should can trigger onCancel event", () => {
    const onClick = jest.fn();
    const onCancelClick = jest.fn();
    const wrapper = shallow(
      <Modal title="关闭回调" visible onOk={onClick} onCancel={onCancelClick}>
        <span>关闭回调</span>
      </Modal>
    );
    wrapper.find(".cuke-modal-mask").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
    expect(onCancelClick).toHaveBeenCalled();
  });

  it("should can trigger onOk event", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Modal title="关闭回调" visible onOk={onClick}>
        <span>关闭回调</span>
      </Modal>
    );
    wrapper.find(".cuke-modal-footer").simulate("click");
    setTimeout(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });

  it("should cannot find <Modal/> when destroy", () => {
    const message = Modal.success();
    message.destroy();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-success").length === 0);
    }, 10);
  });

  it("should render <Modal/> when call modal success static method", () => {
    Modal.success();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-success").length === 1);
    }, 10);
  });

  it("should render <Modal/> when call modal error static method", () => {
    Modal.error();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-error").length === 1);
    }, 10);
  });
  it("should render <Modal/> when call modal info static method", () => {
    Modal.info();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-info").length === 1);
    }, 10);
  });
  it("should render <Modal/> when call modal warning static method", () => {
    Modal.warning();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-warning").length === 1);
    }, 10);
  });
  it("should render <Modal/> when call modal confirm static method", () => {
    Modal.confirm();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-confirm").length === 1);
    }, 10);
  });
  it("should render <Modal/> when call modal loading static method", () => {
    Modal.loading();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-loading").length === 1);
    }, 10);
  });
  it("should render <Modal/> when call modal prompt static method", () => {
    Modal.prompt();
    setTimeout(() => {
      assert(document.querySelector(".cuke-modal-prompt").length === 1);
    }, 10);
  });

  it("should render prompt when call modal static method", () => {
    const wrapper = render(
      <Modal visible staticMethodType="prompt" isStaticMethod>
        1111
      </Modal>
    );
    setTimeout(() => {
      assert(wrapper.find(".cuke-modal-method").length === 1);
      assert(wrapper.find(<Input />).length === 1);
    }, 10);
  });

  it("should render custom content when call modal.prompt() static method", () => {
    const wrapper = render(
      <Modal
        visible
        staticMethodType="prompt"
        isStaticMethod
        content={<Button />}
      >
        1111
      </Modal>
    );
    setTimeout(() => {
      assert(wrapper.find(Button).length === 1);
    }, 10);
  });

  it("should render custom icon type when call modal.prompt() static method", () => {
    const wrapper = render(
      <Modal visible staticMethodType="prompt" isStaticMethod iconType="error">
        1111
      </Modal>
    );
    setTimeout(() => {
      assert(wrapper.find(ErrorIcon).length === 1);
    }, 10);
  });

  it("should render have two button when call modal.confirm() static method", () => {
    const wrapper = render(
      <Modal visible staticMethodType="confirm" isStaticMethod>
        1111
      </Modal>
    );
    setTimeout(() => {
      assert(wrapper.find(Button).length === 2);
    }, 10);
  });

  it("should render have only one button when call not is modal.error() static method", () => {
    const wrapper = render(
      <Modal visible staticMethodType="error" isStaticMethod>
        1111
      </Modal>
    );
    setTimeout(() => {
      assert(wrapper.find(Button).length === 1);
    }, 10);
  });

  it("should find .cuke-modal-close is modal.xx() static method", () => {
    const wrapper = shallow(
      <Modal visible staticMethodType="error">
        1111
      </Modal>
    );
    wrapper.setProps({ isStaticMethod: true });
    expect(wrapper.find(".cuke-modal-close").length).toBe(1);
  });

  it("should render custom footer", () => {
    const wrapper = shallow(
      <Modal
        visible
        footer={
          <>
            <Button>1</Button>
            <Button>2</Button>
          </>
        }
      >
        1111
      </Modal>
    );
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it("should trigger onOk and onCancel click event", () => {
    const onOk = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <Modal visible onOk={onOk} onCancel={onCancel}>
        1111
      </Modal>
    );
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(onOk).toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalled();
  });

  it("should trigger onOk and onCancel click event when isStaticMethod exist", () => {
    const onOk = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <Modal visible onOk={onOk} onCancel={onCancel} isStaticMethod>
        1111
      </Modal>
    );
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(onOk).toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalled();
  });

  it("should cannot trigger onOk and onCancel click event when disabled", () => {
    const onOk = jest.fn();
    const onCancel = jest.fn();
    const wrapper = shallow(
      <Modal
        visible
        onOk={onOk}
        onCancel={onCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        1111
      </Modal>
    );
    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(onOk).toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalled();
  });

  it("should set body style when did update", () => {
    const wrapper = shallow(<Modal visible={false}>1111</Modal>);
    wrapper.setProps({ visible: true });
    wrapper.update();
    expect(document.body.style.overflow).toEqual("hidden");
    expect(document.body.style.paddingRight).toEqual("15px");
    wrapper.setProps({ visible: false });
    wrapper.update();
    expect(document.body.style.overflow).toEqual("");
    expect(document.body.style.paddingRight).toEqual("0px");
  });

  it("should find custom wrapperClassName ", () => {
    const wrapper = shallow(
      <Modal wrapperClassName="test" visible>
        1111
      </Modal>
    );
    assert(wrapper.find(".test").length === 1);
  });
});
