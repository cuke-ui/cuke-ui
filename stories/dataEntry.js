import moment from 'moment';
import React from "react";
import { storiesOf } from "@storybook/react";

import WordPadPage from "./pages/wordPad";
import RadioPage from "./pages/radio";
import CheckboxPage from "./pages/checkbox";
import Input from "../components/input";
import Switch from "../components/switch";
import DatePicker from "../components/datePicker";
import Button from "../components/button";
import { withInfo } from "@storybook/addon-info";
import { IoIosAddCircleOutline } from "react-icons/io";

import "../components/input/styles.less";
import "../components/radio/styles.less";
import "../components/checkbox/styles.less";
import "../components/select/styles.less";
import "../components/datePicker/styles.less";
import "../components/numberInput/styles.less";
import "./styles/dataEntry.less";
import Select from "../components/select";
import NumberInput from '../components/numberInput';

storiesOf("数据录入", module)
  .add(
    "WordPad 写字板",
    withInfo(`
      import React, { Component } from 'react';
      import WordPad from '../../components/wordPad';
      import Button from '../../components/button';
      import message from '../../components/message';

      export default class WordPadPage extends Component { 
        state = {
          imgUrl:""
        }
        onGetImage = ()=>{
          const img = this.canvas.toDataURL('image/png')
          console.log('获取成功:',img)
          this.setState({
            imgUrl:img
          })
          message.success('获取成功')
        }
        render(){ 
          const { imgUrl } = this.state
          return (
            <div>
            <h2>用鼠标在上面写字</h2>
            <WordPad
              width={300}
              height={300}
              style={{
                border: '1px solid #444',
                margin: '10px 0'
              }}
      s				getCanvas={(canvas, ctx) => this.canvas = canvas}
            />
            <Button type="primary" onClick={this.onGetImage}>获取文字</Button>
            {
              imgUrl ? <img src={imgUrl}/> : undefined
            }
            </div>
          )
        }
      }
  `)(() => <WordPadPage />)
  )
  .add(
    "Input 输入框",
    withInfo()(() => (
      <div style={{ width: 400 }}>
        <h2>基本使用</h2>
        <Input
          placeholder="请输入"
          onChange={e => console.log(e.target.value)}
        />
        <Input
          type="password"
          placeholder="请输入密码"
          style={{ margin: "10px 0" }}
        />
        <Input type="number" placeholder="请输入数字" />
        <Input
          placeholder="请输入"
          defaultValue="默认值"
          style={{ margin: "10px 0" }}
        />
        <Input readonly value="只读" style={{ marginBottom: 10 }} />
        <Input disabled placeholder="禁用" />

        <h2>前置/后置标签</h2>
        <Input addonBefore={<IoIosAddCircleOutline />} placeholder="请输入" />
        <Input
          addonAfter={".com"}
          placeholder="填写网址"
          style={{ margin: "10px 0" }}
        />
        <Input
          addonBefore={"https://"}
          addonAfter={".cn"}
          placeholder="www.lijinke"
        />
        <Input
          disabled
          addonAfter={".com"}
          placeholder="填写网址"
          style={{ margin: "10px 0" }}
        />
      </div>
    ))
  )
  .add(
    "NumberInput 输入框",
    withInfo()(() => (
      <div className="date-entry-example">
        <h2>基本使用</h2>
        <NumberInput placeholder="请输入"/>

        <h2>默认值(自动去除非数字)</h2>
        <NumberInput value="123sdfdj"/>
        <NumberInput defaultValue={'abc'}/>

        <h2>禁用</h2>
        <NumberInput disabled value={6666}/>

        <h2>最小值和最大值 (例如:1-99)</h2>
        <NumberInput value={11} min={1} max={99}/>

        <h2>数字经度(小数点保留后几位)</h2>
        <NumberInput value={11.1} decimal={2}/>
        <NumberInput placeholder="IP 地址" decimal={3} style={{width: 200}}/>

        <h2>加减按钮</h2>
        <NumberInput value={2} min={1} showStepper/>
        <NumberInput value={2} min={1} showStepper disabled/>

        <h2>自定义步数</h2>
        <NumberInput value={2} min={1} showStepper step={10}/>
        <NumberInput value={2.22} min={1} showStepper step={0.1}/>
      </div>
    ))
  )
  .add(
    "Radio 单选框",
    withInfo(`
      <div>
      <h2>基本使用</h2>
      <Radio value="黄瓜 ui" onChange={this.onChange}>
        黄瓜 ui
      </Radio>{' '}
      <br />
      <Radio defaultChecked={true}>默认选中</Radio> <br />
      <h2>禁用</h2>
      <Radio disabled>黄瓜 ui</Radio> <br />
      <Radio checked disabled>
        黄瓜 ui
      </Radio>
      <h2>老板需要几号技师</h2>
      <p> 选中 : {this.state.value} </p>
      <Radio.Group value={this.state.value} onChange={this.onChange}>
        <Radio value="小红">小红</Radio>
        <Radio value="小明">小明</Radio>
        <Radio value="小美">小美</Radio>
        <Radio value="小芳">小芳</Radio>
        <Radio value="小黑" disabled>
          小黑
        </Radio>
      </Radio.Group>
    </div>
`)(() => <RadioPage />),
    { notes: "test" }
  )
  .add("Checkbox 复选框", withInfo()(() => <CheckboxPage />))
  .add(
    "Switch 开关",
    withInfo()(() => (
      <div>
        <h2>基本使用</h2>
        <Switch onChange={checked => console.log("checked", checked)} />

        <h2>描述文字</h2>
        <Switch checkedChildren="♂" unCheckedChildren="♀" />
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />

        <h2>默认选中</h2>
        <Switch defaultChecked />

        <h2>禁用</h2>
        <Switch checkedChildren="开" unCheckedChildren="关" disabled />
        <Switch defaultChecked disabled />

        <h2>加载中</h2>
        <Switch checkedChildren="开" unCheckedChildren="关" loading />
        <Switch defaultChecked loading />

        <h2>三种大小</h2>
        <Switch defaultChecked size="large" />
        <Switch defaultChecked size="default" />
        <Switch defaultChecked size="small" />
      </div>
    ))
  )
  .add(
    "Select 选择器",
    withInfo()(() => (
      <div>
        <h2>基本使用</h2>
        <Select placeholder="请选择">
          <Select.Option value="黄瓜">黄瓜</Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>

        <h2>禁用</h2>
        <Select placeholder="请选择" disabled>
          <Select.Option value="黄瓜" disabled>
            黄瓜
          </Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>
        <Select placeholder="请选择">
          <Select.Option value="黄瓜" disabled>
            黄瓜
          </Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>

        <h2>默认值</h2>
        <Select defaultValue="黄瓜">
          <Select.Option value="黄瓜">黄瓜</Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>

        <h2>面板改变回调</h2>
        <Select
          placeholder="请选择"
          onPanelVisibleChange={visible =>
            console.log("panel change:", visible)
          }
        >
          <Select.Option value="黄瓜">黄瓜</Select.Option>
          <Select.Option value="茄子">茄子</Select.Option>
          <Select.Option value="番茄">番茄</Select.Option>
        </Select>
      </div>
    ))
  )
  .add(
    "DatePicker 日期选择器",
    withInfo()(() => (
      <div>
        <h2>基本使用</h2>
        <DatePicker
          placeholder="请选择"
          onChange={(currentDay, date, dateString) => console.log(currentDay, date, dateString)} />

        <h2>禁用</h2>
        <DatePicker placeholder="请选择" disabled />

        <h2>不显示今天</h2>
        <DatePicker placeholder="请选择" showToday={false}/>

        <h2>默认值</h2>
        <DatePicker defaultValue={moment('1996/09/25', 'YYYY/MM/DD')} />

        <h2>加载中</h2>
        <DatePicker format="YYYY-MM-DD HH:mm:ss" loading/>

        <h2>自定义格式</h2>
        <DatePicker format="YYYY-MM-DD HH:mm:ss" />

        <h2>面板改变回调</h2>
        <DatePicker onPanelVisibleChange={(visible) => console.log('visible change', visible)} />

        <h2>扩展</h2>
        <DatePicker extraFooter={<Button type="primary" block>黄瓜ui</Button>} />
      </div>
    ))
  )
  .add(
    "Upload 上传",
    withInfo()(() => (
      <div>
        <h2>基本使用</h2>
        // TODO: 
      </div>
    ))
  )
