import React, { PureComponent, cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import { createPortal, render, unmountComponentAtNode } from "react-dom";
import cls from "classnames";
import Button from "../button";
import Input from "../input";
import {
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  CloseIcon
} from "../icon";

const typeConfig = {
  info: "info",
  success: "success",
  error: "error",
  warning: "warning",
  loading: "loading",
  confirm: "confirm",
  prompt: "prompt"
};

/**
 * const modal = Modal.confirm()  // 得到当前 Modal 引用
 * modal.destroy()   // 手动关闭
 * @export
 * @class Modal
 * @extends {PureComponent}
 */
export default class Modal extends PureComponent {
  state = {
    init: false,
    visible: this.props.isStaticMethod || false,
    promptValue: {}
  };
  _containerRef = null;
  _currentNodeRef = null;
  animationTime = 500;
  static defaultProps = {
    prefixCls: "cuke-modal",
    visible: false,
    isStaticMethod: false, // 用来区分 是 Modal.xx() 还是 <Modal/>
    getPopupContainer: () => document.body,
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
    iconType: PropTypes.oneOf(Object.values(typeConfig)),
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    centered: PropTypes.bool,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    showMask: PropTypes.bool,
    getPopupContainer: PropTypes.func,
    zIndex: PropTypes.number,
    width: PropTypes.number,
    footer: PropTypes.oneOfType([
      //footer 不需要设置为 footer={null}
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object
    ]),
    okProps: PropTypes.object,
    cancelProps: PropTypes.object,
    wrapperClassName: PropTypes.string
  };
  constructor(props) {
    super(props);
  }
  destroy = () => {
    unmountComponentAtNode(this._containerRef);
    this._currentNodeRef.remove();
  };
  static renderElement = (type, options = {}) => {
    const container = document.createElement("div");
    const currentNode = document.body.appendChild(container);
    const defaultProps = Modal.defaultProps;
    const prefixCls = defaultProps.prefixCls;
    const iconType = options.iconType || type;
    const _modal = render(
      <Modal
        className={cls(`${prefixCls}-method`, `${prefixCls}-${iconType}`)}
        closable={false}
        visible
        staticMethodType={type}
        isStaticMethod
        {...options}
        title={
          <>
            <span className={cls(`${prefixCls}-method-icon`)}>
              {Modal.renderStaticMethodIcon(iconType)}
            </span>
            <span>{options.title}</span>
          </>
        }
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
    return this.renderElement(typeConfig.confirm, options);
  }
  static success(options) {
    return this.renderElement(typeConfig.success, options);
  }
  static info(options) {
    return this.renderElement(typeConfig.info, options);
  }
  static error(options) {
    return this.renderElement(typeConfig.error, options);
  }
  static warning(options) {
    return this.renderElement(typeConfig.warning, options);
  }
  static loading(options) {
    return this.renderElement(typeConfig.loading, options);
  }
  static prompt(options) {
    return this.renderElement(typeConfig.prompt, options);
  }
  static renderStaticMethodIcon(type) {
    switch (type) {
      case typeConfig["info"]:
        return <InfoIcon />;
      case typeConfig["success"]:
        return <SuccessIcon />;
      case typeConfig["error"]:
        return <ErrorIcon />;
      case typeConfig["warning"]:
        return <WarningIcon />;
      case typeConfig["confirm"]:
        return <WarningIcon />;
      case typeConfig["loading"]:
        return <LoadingIcon />;
      case typeConfig["prompt"]:
        return <InfoIcon />;
      default:
        return null;
    }
  }
  _onOk = () => {
    // 如果是 Modal.xx() 的方式 调用 直接销毁节点
    if (this.props.isStaticMethod) {
      this.setState({ visible: false }, () => {
        setTimeout(() => {
          this.destroy();
        }, this.animationTime);
      });
    }
    this.props.onOk(this.state.promptValue);
  };
  _onCancel = () => {
    if (this.props.isStaticMethod) {
      this.setState({ visible: false }, () => {
        setTimeout(() => {
          this.destroy();
        }, this.animationTime);
      });
    }
    this.props.onCancel(this.state.promptValue);
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
  onPromptChange = e => {
    this.setState({
      promptValue: {
        value: e.target.value,
        checked: e.target.checked
      }
    });
  };

  static getDerivedStateFromProps({ visible, isStaticMethod }, state) {
    if (visible === true && !state.visible) {
      return {
        init: true,
        visible: isStaticMethod ? false : visible
      };
    }
    return null;
  }
  componentDidUpdate() {
    if (!this.props.isStaticMethod) {
      if (this.props.visible === true) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
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
      getPopupContainer,
      centered,
      closable,
      maskClosable,
      showMask,
      style,
      width,
      zIndex,
      okButtonProps,
      cancelButtonProps,
      wrapperClassName,
      iconType, //eslint-disable-line
      staticMethodType, //eslint-disable-line
      isStaticMethod, //eslint-disable-line
      ...attr
    } = this.props;

    const { init } = this.state;

    const _visible = isStaticMethod ? this.state.visible : visible;

    const maskClickHandle = maskClosable ? { onClick: this._onCancel } : {};

    const defaultPromptContent = content || <Input placeholder="请输入" />;

    return createPortal(
      <>
        {showMask && (
          <div
            className={cls(`${prefixCls}-mask`, {
              [`${prefixCls}-mask-show`]: _visible,
              [`${prefixCls}-mask-hide`]: isStaticMethod
                ? !_visible
                : init && !_visible
            })}
            {...maskClickHandle}
          />
        )}
        <div
          role="dialog"
          tabIndex="-1"
          className={cls(`${prefixCls}-wrap`, wrapperClassName, {
            [`${prefixCls}-centered`]: centered
          })}
        >
          <div
            className={cls(prefixCls, className, {
              [`${prefixCls}-open`]: _visible,
              [`${prefixCls}-close`]: isStaticMethod
                ? !_visible
                : init && !_visible,
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
              {closable && (
                <CloseIcon
                  className={`${prefixCls}-close`}
                  onClick={this._onCancel}
                />
              )}
            </section>
            <section className={`${prefixCls}-content`}>
              {isStaticMethod &&
              staticMethodType === typeConfig.prompt &&
              isValidElement(defaultPromptContent)
                ? cloneElement(defaultPromptContent, {
                    onChange: this.onPromptChange
                  })
                : content || children}
            </section>
            {footer &&
              (footer.length !== 0 ? (
                <section className={`${prefixCls}-footer`}>{footer}</section>
              ) : (
                footer.length === 0 && (
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
              ))}
          </div>
        </div>
      </>,
      getPopupContainer()
    );
  }
}
