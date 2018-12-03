import React, { PureComponent } from 'react';
import Checkbox from '../../components/checkbox';

export default class CheckboxPage extends PureComponent {
  onChange = e => {
    console.log(e.target.value, e.target.checked);
  };
  onGroupChange = value => {
    console.log('选中:', value);
  };
  render() {
    return (
      <div>
        <h2>基本使用</h2>
        <Checkbox onChange={this.onChange}>黄瓜 ui</Checkbox>

        <h2>按钮模式</h2>
        <Checkbox.Button value="黄瓜">黄瓜</Checkbox.Button>
        <Checkbox.Button value="香蕉" disabled style={{marginLeft: 15}}>香蕉</Checkbox.Button>

        <h2>默认选中</h2>
        <Checkbox checked onChange={this.onChange}>黄瓜 ui</Checkbox>

        <h2>禁用</h2>
        <Checkbox disabled onChange={this.onChange}>
          黄瓜 ui
        </Checkbox>
        <Checkbox disabled checked style={{ margin: "0 20px" }}>
          黄瓜 ui
        </Checkbox>
        
        <Checkbox.Button value="香蕉" disabled checked>香蕉</Checkbox.Button>

        <h2>不确定</h2>
        <Checkbox checked indeterminate>
          黄瓜 ui
        </Checkbox>

        <h2>组合</h2>
        <Checkbox.Group onChange={this.onGroupChange}>
          <Checkbox value="黄瓜">黄瓜</Checkbox>
          <Checkbox value="茄子">茄子</Checkbox>
          <Checkbox value="玉米">玉米</Checkbox>
          <Checkbox value="番茄" disabled>番茄</Checkbox>
        </Checkbox.Group>

        <h2>按钮组合</h2>
        <Checkbox.Group onChange={this.onGroupChange}>
          <Checkbox.Button value="黄瓜">黄瓜</Checkbox.Button>
          <Checkbox.Button value="茄子">茄子</Checkbox.Button>
          <Checkbox.Button value="玉米">玉米</Checkbox.Button>
          <Checkbox.Button value="番茄" disabled>番茄</Checkbox.Button>
        </Checkbox.Group>

        <h2>全部禁用</h2>
        <Checkbox.Group disabled>
          <Checkbox defaultChecked>黄瓜 ui</Checkbox>
          <Checkbox>黄瓜 ui</Checkbox>
          <Checkbox>黄瓜 ui</Checkbox>
          <Checkbox>黄瓜 ui</Checkbox>
        </Checkbox.Group>

        <Checkbox.Group disabled style={{marginTop: 25}}>
          <Checkbox.Button value="黄瓜">黄瓜</Checkbox.Button>
          <Checkbox.Button value="茄子">茄子</Checkbox.Button>
          <Checkbox.Button value="玉米">玉米</Checkbox.Button>
          <Checkbox.Button value="番茄">番茄</Checkbox.Button>
        </Checkbox.Group>
      </div>
    );
  }
}
