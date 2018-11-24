import React, { Component } from "react";
import Drawer from "../../components/drawer";
import Button from "../../components/button";
import Radio from "../../components/radio";
import Col from "../../components/col";
import Row from "../../components/row";

export default class DrawerPage extends Component {
  state = {
    visible: false,
    placement: "right"
  };
  onClose = visible => {
    this.setState({
      [visible]: false
    });
  };
  onShow = (visible = "visible") => {
    this.setState({
      [visible]: true
    });
  };
  onPlacementChange = e => {
    this.setState({
      placement: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={5}>
            <h2>基本使用</h2>
            <Button type="primary" onClick={() => this.onShow("visible")}>
              偷偷打开家长的抽屉
            </Button>
          </Col>
          <Col span={5}>
            <h2>没有标题</h2>
            <Button type="primary" onClick={() => this.onShow("visible20")}>
              偷偷打开家长的抽屉
            </Button>
          </Col>
          <Col span={4}>
            <h2>点击蒙版不关闭</h2>
            <Button type="info" onClick={() => this.onShow("visible10")}>
              打开
            </Button>
          </Col>
          <Col span={4}>
            <h2>不显示关闭按钮</h2>
            <Button type="info" onClick={() => this.onShow("visible11")}>
              打开
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <h2>自定义宽度和zIndex</h2>
            <Button type="info" onClick={() => this.onShow("visible12")}>
              打开
            </Button>
          </Col>
          <Col span={4}>
            <h2>自定义 footer</h2>
            <Button type="info" onClick={() => this.onShow("visible21")}>
              打开
            </Button>
          </Col>
          <Col span={4}>
            <h2>不显示蒙版</h2>
            <Button type="info" onClick={() => this.onShow("visible22")}>
              打开
            </Button>
          </Col>
        </Row>
        <h2>自定义高度 (方向为 top | bottom 有效)</h2>
        <Button type="primary" onClick={() => this.onShow("visible15")}>
          可长可短
        </Button>
        <h2>四个方向</h2>
        <div style={{marginBottom: 20}}>
          <Radio.Group value={this.state.placement} onChange={this.onPlacementChange}>
            <Radio value="right">右</Radio>
            <Radio value="left">左</Radio>
            <Radio value="top">上</Radio>
            <Radio value="bottom">下</Radio>
          </Radio.Group>
        </div>
        <Row>
          <Col span={6}>
            <Button type="primary" onClick={() => this.onShow("visible2")}>
              偷偷打开家长的抽屉
            </Button>
          </Col>
        </Row>
        <Drawer
          title="基本使用"
          visible={this.state.visible}
          onClose={() => this.onClose("visible")}
        >
          <span>孩子别翻了,没钱</span>
        </Drawer>
        <Drawer
          visible={this.state.visible20}
          onClose={() => this.onClose("visible20")}
        >
          <span>没有标题</span>
        </Drawer>
        <Drawer
          title="点击蒙版不关闭"
          visible={this.state.visible10}
          maskClosable={false}
          onClose={() => this.onClose("visible10")}
        >
          <span>自定义文字</span>
        </Drawer>
        <Drawer
          title={this.state.placement}
          placement={this.state.placement}
          visible={this.state.visible2}
          onClose={() => this.onClose("visible2")}
        >
          <span>{this.state.placement}</span>
        </Drawer>
        <Drawer
          title="不显示关闭按钮"
          visible={this.state.visible11}
          closable={false}
          onClose={() => this.onClose("visible11")}
        >
          <Button
            type="primary"
            block
            onClick={() => this.onClose("visible11")}
          >
            关闭
          </Button>
        </Drawer>
        <Drawer
          width={500}
          zIndex={888}
          title="自定义宽度和 zIndex"
          visible={this.state.visible12}
          onClose={() => this.onClose("visible12")}
        >
          <span>宽度500px</span>
          <span>z-index:888</span>
        </Drawer>
        <Drawer
          title="自定义高度"
          placement="bottom"
          height={400}
          visible={this.state.visible15}
          onClose={() => this.onClose("visible15")}
        >
          <span>高度400px</span>
        </Drawer>
        <Drawer
          title="自定义高度"
          visible={this.state.visible21}
          onClose={() => this.onClose("visible21")}
          footer={
            <>
              <Button onClick={() => this.onClose("visible21")}>取消</Button>
              <Button style={{marginLeft: 10}} type="primary" onClick={() => this.onClose("visible21")}>确定</Button>
            </>
          }
        >
          <span>我有两只脚</span>
        </Drawer>
        <Drawer
          title="不显示蒙版"
          showMask={false}
          visible={this.state.visible22}
          onClose={() => this.onClose("visible22")}
        >
          <span>孩子别翻了,没钱</span>
        </Drawer>
      </div>
    );
  }
}
