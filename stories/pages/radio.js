import React, { PureComponent } from 'react';
import Radio from '../../components/radio';

export default class RadioPage extends PureComponent {
  state = {
    value: '小红'
  };
  onChange = (type)=>  e => {
    console.log(e.target.value);
    this.setState({ [type]: e.target.value });
  };
  onChange2 = e => {
    console.log(e.target.value);
    this.setState({ value2: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>基本使用</h2>
        <Radio value="666" onChange={(e) => console.log(e.target.value)}>
          黄瓜 ui
        </Radio>
        <br />
        <Radio defaultChecked={true}>默认选中</Radio> <br />

        <h2>禁用</h2>
        <Radio disabled>黄瓜 ui</Radio> <br />
        <Radio checked disabled>
          黄瓜 ui
        </Radio>

        <h2>按钮模式</h2>
        <p> 选中 : {this.state.value2} </p>
        <Radio.Group value={this.state.value2} onChange={this.onChange2}>
          <Radio.Button value="小红">小红</Radio.Button>
          <Radio.Button value="小明">小明</Radio.Button>
          <Radio.Button value="小美">小美</Radio.Button>
          <Radio.Button value="小芳">小芳</Radio.Button>
          <Radio.Button value="小黑" disabled>
            小黑
          </Radio.Button>
        </Radio.Group>

        <h2>三种大小</h2>
        <Radio.Group size="large" value={this.state.large} onChange={this.onChange('large')}>
          <Radio.Button value="小红">小红</Radio.Button>
          <Radio.Button value="小明">小明</Radio.Button>
          <Radio.Button value="小美">小美</Radio.Button>
        </Radio.Group>
        <Radio.Group value={this.state.default} onChange={this.onChange('default')} style={{margin: "15px 0"}}>
          <Radio.Button value="小红">小红</Radio.Button>
          <Radio.Button value="小明">小明</Radio.Button>
          <Radio.Button value="小美">小美</Radio.Button>
        </Radio.Group>
        <Radio.Group size="small" value={this.state.small} onChange={this.onChange('small')}>
          <Radio.Button value="小红">小红</Radio.Button>
          <Radio.Button value="小明">小明</Radio.Button>
          <Radio.Button value="小美">小美</Radio.Button>
        </Radio.Group>

        <h2>组合使用: 老板需要几号技师</h2>
        <p> 选中 : {this.state.value} </p>
        <Radio.Group value={this.state.value} onChange={this.onChange('value')}>
          <Radio value="小红">小红</Radio>
          <Radio value="小明">小明</Radio>
          <Radio value="小美">小美</Radio>
          <Radio value="小芳">小芳</Radio>
          <Radio value="小黑" disabled>
            小黑
          </Radio>
        </Radio.Group>
        <h2>全部禁用</h2>
        <Radio.Group value={'小红'} disabled>
          <Radio value="小红">小红</Radio>
          <Radio value="小明">小明</Radio>
          <Radio value="小美">小美</Radio>
          <Radio value="小芳">小芳</Radio>
          <Radio value="小黑">
            小黑
          </Radio>
        </Radio.Group>
        <Radio.Group disabled style={{marginTop: 25}}>
          <Radio.Button value="小红">小红</Radio.Button>
          <Radio.Button value="小明">小明</Radio.Button>
          <Radio.Button value="小美">小美</Radio.Button>
          <Radio.Button value="小芳">小芳</Radio.Button>
          <Radio.Button value="小黑" disabled>
            小黑
          </Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}
