import React, { PureComponent } from "react";
import Steps from "../../components/steps";
import Pagination from "../../components/pagination";
import {
  WarningIcon,
  CloseIcon,
  ArrowRightIcon,
  ErrorIcon
} from "../../components/icon";

export default class StepsPage extends PureComponent {
  state = {
    current: 0,
    contentCurrent: 0
  };
  onChange = page => {
    this.setState({
      current: page - 1
    });
  };
  onContentChange = page => {
    this.setState({
      contentCurrent: page - 1
    });
  };
  render() {
    return (
      <div className="example-steps-page">
        <h2>基本使用</h2>
        <Steps>
          <Steps.Step title="第一步" description="打开冰箱111111" />
          <Steps.Step title="第二步" description="放入大象22222" />
          <Steps.Step title="第三步" description="关上冰箱33333" />
        </Steps>

        <h2>不显示动画</h2>
        <Steps current={1} showProcessSpin={false}>
          <Steps.Step title="第一步" description="打开冰箱111111" />
          <Steps.Step title="第二步" description="放入大象22222" />
          <Steps.Step title="第三步" description="关上冰箱33333" />
        </Steps>

        <h2>动态切换</h2>
        <Steps current={this.state.current}>
          <Steps.Step title="第一步" description="打开冰箱111111" />
          <Steps.Step title="第二步" description="放入大象22222" />
          <Steps.Step title="第三步" description="关上冰箱33333" />
        </Steps>

        <br />
        <Pagination
          simple
          current={1}
          total={3}
          onChange={this.onChange}
          locale={{
            prevText: "上一步",
            nextText: "下一步"
          }}
        />

        <h2>配合内容使用</h2>
        <Steps current={this.state.contentCurrent}>
          <Steps.Step title="第一步" description="打开冰箱111111">
            内容111111
          </Steps.Step>
          <Steps.Step title="第二步" description="放入大象22222">
            内容222222
          </Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333">
            内容333333
          </Steps.Step>
        </Steps>

        <br />
        <Pagination
          simple
          current={1}
          total={3}
          onChange={this.onContentChange}
          locale={{
            prevText: "上一步",
            nextText: "下一步"
          }}
        />

        <h2>简洁版</h2>
        <Steps current={1}>
          <Steps.Step title="第一步" />
          <Steps.Step title="第二步" />
          <Steps.Step title="第三步" />
        </Steps>

        <h2>自定义当前状态</h2>
        <Steps current={1} status="error">
          <Steps.Step title="第一步" description="打开冰箱111111" />
          <Steps.Step title="第二步" description="这一步出错啦" />
          <Steps.Step title="第三步" description="关上冰箱33333" />
        </Steps>

        <h2>自定义图标</h2>
        <Steps current={2}>
          <Steps.Step
            title="第一步"
            description="打开冰箱111111"
            icon={<WarningIcon />}
          />
          <Steps.Step
            title="第二步"
            description="放入大象22222"
            icon={<CloseIcon />}
          />
          <Steps.Step
            title="第三步"
            description="关上冰箱33333"
            icon={<ArrowRightIcon />}
          />
        </Steps>

        <Steps current={2} icon={<ErrorIcon />}>
          <Steps.Step title="第一步" description="打开冰箱111111" />
          <Steps.Step title="第二步" description="放入大象22222" />
          <Steps.Step title="第三步" description="关上冰箱33333" />
        </Steps>
      </div>
    );
  }
}
