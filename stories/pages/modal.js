import React, { Component } from "react";
import Modal from "../../components/modal";
import message from "../../components/message";
import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import Col from "../../components/col";
import Row from "../../components/row";

export default class ModalPage extends Component {
  state = {
    visible: false
  };
  onCancel = visible => {
    this.setState({
      [visible]: false
    });
  };
  onShow = (visible = "visible") => {
    this.setState({
      [visible]: true
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={6}>
            <h2>基本使用</h2>
            <Button type="primary" onClick={() => this.onShow("visible")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>自定义文案</h2>
            <Button type="primary" onClick={() => this.onShow("visible2")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>异步加载</h2>
            <Button type="primary" onClick={() => this.onShow("visible3")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>自定义 footer</h2>
            <Button type="primary" onClick={() => this.onShow("visible20")}>
              打开
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <h2>无 footer</h2>
            <Button type="primary" onClick={() => this.onShow("visible4")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>无标题</h2>
            <Button type="primary" onClick={() => this.onShow("visible10")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>居中显示</h2>
            <Button type="primary" onClick={() => this.onShow("visible5")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>点击蒙版不关闭</h2>
            <Button type="info" onClick={() => this.onShow("visible6")}>
              打开
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <h2>自定义z-index</h2>
            <Button type="info" onClick={() => this.onShow("visible8")}>
              zIndex: 10000
            </Button>
          </Col>
          <Col span={6}>
            <h2>自定义宽度</h2>
            <Button type="info" onClick={() => this.onShow("visible9")}>
              width: 400
            </Button>
          </Col>
          <Col span={6}>
            <h2>不显示关闭按钮</h2>
            <Button type="warning" onClick={() => this.onShow("visible7")}>
              打开
            </Button>
          </Col>
          <Col span={6}>
            <h2>自定按钮属性</h2>
            <Button type="primary" onClick={() => this.onShow("visible30")}>
              打开
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <h2>超长高度</h2>
            <Button type="primary" onClick={() => this.onShow("visible31")}>
              姚明在弹框里面
            </Button>
          </Col>
          <Col span={6}>
            <h2>不显示蒙版</h2>
            <Button type="primary" onClick={() => this.onShow("visible32")}>
              打开
            </Button>
          </Col>
        </Row>
        <h2>信息提示</h2>
        <Row>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.confirm({
                  title: "黄瓜ui",
                  content: "即插即用",
                  onOk() {
                    console.log("ok!");
                    message.success("你点击了确定");
                  },
                  onCancel() {
                    console.log("cancel!");
                    message.info("你点击了取消");
                  }
                })
              }}
            >
              Modal.confirm()
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.success({
                  title: "黄瓜ui",
                  content: "即插即用"
                })
              }}
            >
              Modal.success()
            </Button>
          </Col>
          <Col span={4} offset={1}>
            <Button
              onClick={() => {
                Modal.info({
                  title: "黄瓜ui",
                  content: "即插即用"
                })
              }}
            >
              Modal.info()
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.error({
                  title: "黄瓜ui",
                  content: "即插即用"
                })
              }}
            >
              Modal.error()
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.info({
                  title: "为以下商品付款",
                  content: '1',
                  showMask: false,
                })
              }}
            >
              不显示蒙版
            </Button>
          </Col>
        </Row>
        <Row style={{ margin: "20px 0" }}>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.warning({
                  title: "黄瓜ui",
                  content: "即插即用"
                })
              }}
            >
              Modal.warning()
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.loading({
                  title: "黄瓜ui",
                  content: "即插即用",
                })
              }}
            >
              Modal.loading()
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.prompt({
                  title: "黄瓜ui",
                  onOk({ value, checked }) {
                    console.log(value, checked)
                  }
                })
              }}
            >
              Modal.prompt()
            </Button>
          </Col>
          <Col span={4}>
            <Button
              onClick={() => {
                Modal.prompt({
                  title: "为以下商品付款",
                  content: <Checkbox />,
                  onOk({ value, checked }) {
                    console.log(value, checked)
                  }
                })
              }}
            >
              自定义内容的 Modal.prompt()
            </Button>
          </Col>
          <Col span={4} offset={2}>
            <Button
              onClick={() => {
                Modal.success({
                  title: "hello",
                  content: "how are you",
                  closable: true,
                })
              }}
            >
              显示X
            </Button>
          </Col>
        </Row>

        <h2>自定义图标类型</h2>
        <Row>
          <Col span={4}>
            <Button
              type="success"
              onClick={() => {
                Modal.info({
                  iconType: "success",
                  title: "黄瓜 ui",
                  content: "即插即用"
                })
              }}
            >
              success
            </Button>
          </Col>
          <Col span={4}>
            <Button
              type="error"
              onClick={() => {
                Modal.loading({
                  iconType: "error",
                  title: "黄瓜 ui",
                  content: "即插即用"
                })
              }}
            >
              error
            </Button>
          </Col>
        </Row>
        <Modal
          title="基本使用"
          visible={this.state.visible}
          onCancel={() => this.onCancel("visible")}
          onOk={() => this.onCancel("visible")}
        >
          <span> 其实我是高仿 ant-design 的 </span>
        </Modal>

        <Modal
          title="自定义"
          visible={this.state.visible2}
          okText="哈哈哈"
          cancelText="嘻嘻嘻"
          onCancel={() => this.onCancel("visible2")}
          onOk={() => this.onCancel("visible2")}
        >
          <span>自定义文字</span>
        </Modal>


        <Modal
          title="自定义 footer"
          visible={this.state.visible20}
          footer={
            <>
              <Button key="a" onClick={() => this.onCancel("visible20")}>取消</Button>
              <Button key="b" disabled>按钮2</Button>
              <Button key="c" type="primary" onClick={() => this.onCancel("visible20")}>按钮3</Button>
            </>
          }
          onCancel={() => this.onCancel("visible20")}
          onOk={() => this.onCancel("visible20")}
        >
          我有三个
        </Modal>

        <Modal
          title="异步加载"
          visible={this.state.visible3}
          confirmLoading={this.state.loading}
          onCancel={() => this.onCancel("visible3")}
          onOk={() =>
            this.setState({ loading: true }, () =>
              setTimeout(
                () => this.setState({ loading: false, visible3: false }),
                2000
              )
            )
          }
        >
          <span>点击确定</span>
        </Modal>

        <Modal
          title="没有footer"
          visible={this.state.visible4}
          footer={null}
          onCancel={() => this.onCancel("visible4")}
          onOk={() => this.onCancel("visible4")}
        >
          <span>自定义文字</span>
        </Modal>

        <Modal
          title="居中"
          visible={this.state.visible5}
          centered
          onCancel={() => this.onCancel("visible5")}
          onOk={() => this.onCancel("visible5")}
        >
          <span>自定义文字</span>
        </Modal>

        <Modal
          title="点击蒙版不关闭"
          visible={this.state.visible6}
          maskClosable={false}
          onCancel={() => this.onCancel("visible6")}
          onOk={() => this.onCancel("visible6")}
        >
          <span>自定义文字</span>
        </Modal>

        <Modal
          title="不显示关闭按钮"
          visible={this.state.visible7}
          closable={false}
          onCancel={() => this.onCancel("visible7")}
          onOk={() => this.onCancel("visible7")}
        >
          <span>自定义文字</span>
        </Modal>

        <Modal
          title="z-index:10000"
          zIndex={10000}
          visible={this.state.visible8}
          onCancel={() => this.onCancel("visible8")}
          onOk={() => this.onCancel("visible8")}
        >
          <span>z-index:10000</span>
        </Modal>

        <Modal
          title="自定义宽度"
          width={400}
          visible={this.state.visible9}
          onCancel={() => this.onCancel("visible9")}
          onOk={() => this.onCancel("visible9")}
        >
          <span>宽度:400px</span>
        </Modal>

        <Modal
          visible={this.state.visible10}
          onCancel={() => this.onCancel("visible10")}
          onOk={() => this.onCancel("visible10")}
        >
          <span>没有标题</span>
        </Modal>

        <Modal
          title="自定义按钮属性"
          visible={this.state.visible30}
          onCancel={() => this.onCancel("visible30")}
          onOk={() => this.onCancel("visible30")}
          okButtonProps={{
            disabled: true,
            loading: true,
            type: "default"
          }}
          cancelButtonProps={{
            type: 'info',
          }}
        >
          <span>自定义按钮属性</span>
        </Modal>

        <Modal
          title="超长modal"
          visible={this.state.visible31}
          onCancel={() => this.onCancel("visible31")}
          onOk={() => this.onCancel("visible31")}
        >
          <div style={{ height: window.innerHeight * 2 }}>我是姚明</div>
        </Modal>

        <Modal
          title="没有蒙版"
          showMask={false}
          visible={this.state.visible32}
          onCancel={() => this.onCancel("visible32")}
          onOk={() => this.onCancel("visible32")}
        >
          <span>123</span>
        </Modal>
      </div>
    );
  }
}
