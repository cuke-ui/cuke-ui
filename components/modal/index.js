import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { createPortal, render, unmountComponentAtNode } from "react-dom";
import cls from "classnames";
import Button from "../button";
import { CloseIcon } from "../icon";

/**
 * const modal = Modal.confirm()  // 得到当前 Modal 引用
 * modal.destroy()   // 手动关闭
 * @export
 * @class Modal
 * @extends {PureComponent}
 */
export default class Modal extends PureComponent {
  state = {
    init: false
  };
  _containerRef = null;
  _currentNodeRef = null;
  static defaultProps = {
    prefixCls: "cuke-modal",
    visible: false,
    getTarget: () => document.body,
    width: 520,
    title: "",
    onOk: () => {},
    onCancel: () => {},
    okText: "确定",
    cancelText: "取消",
    footer: [],
    content: "",
    confirmLoading: false,
    maskClosable: true,
    centered: false,
    closable: true,
    showMask: true,
    zIndex: 999,
    okButtonProps: {},
    cancelButtonProps: {}
  };
  static propTypes = {
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    title: PropTypes.oneOfType([
      PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.object
      ])
    ]),
    okText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    cancelText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    centered: PropTypes.bool,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    showMask: PropTypes.bool,
    getTarget: PropTypes.func,
    zIndex: PropTypes.number,
    width: PropTypes.number,
    footer: PropTypes.oneOfType([
      //footer 不需要设置为 footer={null}
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object
    ]),
    okProps: PropTypes.object,
    cancelProps: PropTypes.object
  };
  constructor(props) {
    super(props);
  }
  destroy = () => {
    unmountComponentAtNode(this._containerRef);
    this._currentNodeRef.remove();
  };
  static renderElement = options => {
    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    const _modal = render(
      <Modal
        className={cls(`${Modal.defaultProps.prefixCls}-confirm`)}
        showMask={false}
        closable={false}
        visible
        {...options}
      />,
      container
    );
    _modal._containerRef = container;
    _modal._currentNodeRef = currentNode;

    return {
      destroy: _modal.destroy
    };
  };
  static confirm(options) {
    return this.renderElement(options);
  }
  _onOk = () => {
    this.destroy();
    this.props.onOk();
  };
  _onCancel = () => {
    this.destroy();
    this.props.onCancel();
  };
  disableScroll = () => {
    document.body.style.overflow = "hidden";
    //滚动条的宽度 防止鬼畜
    document.body.style.paddingRight = "15px";
  };
  enableScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = 0;
  };
  componentWillReceiveProps({ visible }) {
    if (visible === true) {
      this.disableScroll();
      this.setState({
        init: true
      });
    } else {
      this.enableScroll();
    }
  }
  render() {
    const {
      prefixCls,
      children,
      content,
      title,
      visible,
      onCancel, //eslint-disable-line
      onOk, //eslint-disable-line
      className,
      footer,
      okText,
      cancelText,
      confirmLoading,
      getTarget,
      centered,
      closable,
      maskClosable,
      showMask,
      style,
      width,
      zIndex,
      okButtonProps,
      cancelButtonProps,
      ...attr
    } = this.props;

    const { init } = this.state;

    const initModalAnimate = init
      ? { [`${prefixCls}-open`]: visible, [`${prefixCls}-close`]: !visible }
      : { [`${prefixCls}-open`]: visible };

    /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
    const initMaskAnimate = init
      ? {
          [`${prefixCls}-mask-show`]: visible,
          [`${prefixCls}-mask-hide`]: !visible
        }
      : { [`${prefixCls}-mask-show`]: visible };

    const maskClickHandle = maskClosable ? { onClick: this._onCancel } : {};

    return createPortal(
      <>
        {showMask ? (
          <div
            className={cls(`${prefixCls}-mask`, initMaskAnimate)}
            {...maskClickHandle}
          />
        ) : (
          undefined
        )}
        <div
          role="dialog"
          tabIndex="-1"
          className={cls(`${prefixCls}-wrap`, {
            [`${prefixCls}-centered`]: centered
          })}
        >
          <div
            className={cls(prefixCls, className, initModalAnimate, {
              "no-title": !title
            })}
            ref={node => (this.modal = node)}
            style={{
              ...style,
              width,
              zIndex
            }}
            {...attr}
          >
            <section className={`${prefixCls}-header`}>
              <h2 className={`${prefixCls}-title`}>{title}</h2>
              {closable ? (
                <CloseIcon
                  className={`${prefixCls}-close`}
                  onClick={this._onCancel}
                />
              ) : (
                undefined
              )}
            </section>
            <section className={`${prefixCls}-content`}>
              {content || children}
            </section>
            {footer && footer.length >= 1 ? (
              <section className={`${prefixCls}-footer`}>
                {footer.map(buttonGroup => buttonGroup)}
              </section>
            ) : (
              footer instanceof Array && (
                <section className={`${prefixCls}-footer`}>
                  <Button {...cancelButtonProps} onClick={this._onCancel}>
                    {cancelText}
                  </Button>
                  <Button
                    type="primary"
                    loading={confirmLoading}
                    {...okButtonProps}
                    onClick={this._onOk}
                  >
                    {okText}
                  </Button>
                </section>
              )
            )}
          </div>
        </div>
      </>,
      getTarget()
    );
  }
}
