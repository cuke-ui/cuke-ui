import React, { PureComponent } from 'react';
import Steps from '../../components/steps';
import Pagination from '../../components/pagination';
import { WarningIcon, CloseIcon, ArrowRightIcon, ErrorIcon } from '../../components/icon';

export default class StepsPage extends PureComponent {
  state = {
    current: 0,
  }
  onChange = (_, current) => {
    this.setState({
      current: current - 1
    })
  }
  render() {
    return (
      <div>
        <h2>基本使用</h2>
        <Steps>
          <Steps.Step title="第一步" description="打开冰箱111111">1</Steps.Step>
          <Steps.Step title="第二步" description="放入大象22222">2</Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333">3</Steps.Step>
        </Steps>

        <h2>简洁版</h2>
        <Steps current={1}>
          <Steps.Step title="第一步" >1</Steps.Step>
          <Steps.Step title="第二步" >2</Steps.Step>
          <Steps.Step title="第三步">3</Steps.Step>
        </Steps>

        <h2>显示动画</h2>
        <Steps current={1} showProcessSpin>
          <Steps.Step title="第一步" description="打开冰箱111111">1</Steps.Step>
          <Steps.Step title="第二步" description="放入大象22222">2</Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333">3</Steps.Step>
        </Steps>


        <h2>动态切换</h2>
        <Steps current={this.state.current} showProcessSpin>
          <Steps.Step title="第一步" description="打开冰箱111111">1</Steps.Step>
          <Steps.Step title="第二步" description="放入大象22222">2</Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333">3</Steps.Step>
        </Steps>

        <br/>
        <Pagination current={1} total={3} onChange={this.onChange} locale={{
          prevText:"上一步",
          nextText:"下一步"
        }}/>

        <h2>自定义当前状态</h2>
        <Steps current={1} status="error" showProcessSpin>
          <Steps.Step title="第一步" description="打开冰箱111111">1</Steps.Step>
          <Steps.Step title="第二步" description="这一步出错啦">2</Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333">3</Steps.Step>
        </Steps>

        <h2>自定义图标</h2>
        <Steps current={2} showProcessSpin>
          <Steps.Step title="第一步" description="打开冰箱111111" icon={<WarningIcon/>}>1</Steps.Step>
          <Steps.Step title="第二步" description="放入大象22222" icon={<CloseIcon/>}>2</Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333" icon={<ArrowRightIcon/>}>3</Steps.Step>
        </Steps>

         <Steps current={2} icon={<ErrorIcon/>}>
          <Steps.Step title="第一步" description="打开冰箱111111">1</Steps.Step>
          <Steps.Step title="第二步" description="放入大象22222" >2</Steps.Step>
          <Steps.Step title="第三步" description="关上冰箱33333">3</Steps.Step>
        </Steps>
      </div>
    );
  }
}
