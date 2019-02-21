import moment from "moment";
import React from "react";
import { storiesOf } from "@storybook/react";

import WordPadPage from "./pages/wordPad";
import RadioPage from "./pages/radio";
import CheckboxPage from "./pages/checkbox";
import Input from "../components/input";
import Switch from "../components/switch";
import DatePicker from "../components/date-picker";
import Button from "../components/button";
import { withInfo } from "@storybook/addon-info";
import { IoIosAddCircleOutline } from "react-icons/io";
import Select from "../components/select";
import message from "../components/message";
import NumberInput from "../components/number-input";
import Upload from "../components/upload";

import "../components/input/styles.less";
import "../components/radio/styles.less";
import "../components/checkbox/styles.less";
import "../components/select/styles.less";
import "../components/date-picker/styles.less";
import "../components/number-input/styles.less";
import "../components/number-input/styles.less";
import "../components/word-pad/styles.less";
import "../components/upload/styles.less";
import "../components/form/styles.less";
import "../components/switch/styles.less";
import "./styles/dataEntry.less";
import Col from "../components/col";
import Row from "../components/row";
import { FileUploadIcon, SuccessIcon } from "../components/icon";
// import Form from '../components/form';
// import FormInfo from './pages/formInfo';

// const formItemLayout = {
//   labelCol: {
//     span: 3
//   },
//   wrapperCol: {
//     span: 21
//   }
// };

const uploadProps = {
  action: "/test",
  onComplete: res => {
    console.log(res);
    message.success("上传成功");
  },
  onError: err => {
    console.log(err);
    message.error("上传失败");
  },
  onStart: () => {
    console.log("上传开始");
  },
  onTimeOut: err => {
    console.log(err);
    message.error("上传超时");
  },
  onProgress: (e, progress) => {
    console.log(e, progress);
  }
};
storiesOf("数据录入", module)
  .add(
    "WordPad 写字板",
    withInfo(`
      import React, { Component } from 'react';
      import WordPad from '../../components/word-pad';
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
  .add("Input 输入框", () => (
    <div style={{ width: 400 }}>
      <h2>基本使用</h2>
      <Input placeholder="请输入" onChange={e => console.log(e.target.value)} />
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

      <h2>前缀/后缀</h2>
      <Input prefix={<IoIosAddCircleOutline />} placeholder="请输入" />
      <Input
        suffix={<IoIosAddCircleOutline />}
        placeholder="请输入"
        style={{ margin: "10px 0" }}
      />
      <Input
        prefix={<IoIosAddCircleOutline />}
        suffix={<SuccessIcon />}
        placeholder="请输入"
      />

      <h2>三种大小</h2>
      <Input placeholder="small" size="small" />
      <Input placeholder="default" style={{ margin: "10px 0" }} />
      <Input placeholder="large" size="large" />

      <br />

      <Input
        addonBefore={"https://"}
        addonAfter={".cn"}
        placeholder="www.lijinke"
        size="small"
        style={{ margin: "10px 0" }}
      />
      <Input
        addonBefore={"https://"}
        addonAfter={".cn"}
        placeholder="www.lijinke"
      />
      <Input
        addonBefore={"https://"}
        addonAfter={".cn"}
        placeholder="www.lijinke"
        size="large"
        style={{ margin: "10px 0" }}
      />

      <h2>可清空</h2>
      <Input allowClear placeholder="请输入" />

      <h2>密码输入框</h2>
      <Input.Password placeholder="请输入你的银行卡密码" />
    </div>
  ))
  .add("NumberInput 输入框", () => (
    <div className="date-entry-example">
      <h2>基本使用</h2>
      <NumberInput placeholder="请输入" />

      <h2>默认值(自动去除非数字)</h2>
      <NumberInput value="123sdfdj" />
      <NumberInput defaultValue={"abc"} />

      <h2>禁用</h2>
      <NumberInput disabled value={6666} />

      <h2>最小值和最大值 (例如:1-99)</h2>
      <NumberInput value={11} min={1} max={99} />

      <h2>数字经度(小数点保留后几位)</h2>
      <NumberInput value={11.1} decimal={2} />
      <NumberInput placeholder="IP 地址" decimal={3} style={{ width: 200 }} />

      <h2>加减按钮</h2>
      <NumberInput value={2} min={1} showStepper />
      <NumberInput value={2} min={1} showStepper disabled />

      <h2>自定义步数</h2>
      <NumberInput value={2} min={1} showStepper step={10} />
      <NumberInput value={2.22} min={1} showStepper step={0.1} />

      <h2>三种大小</h2>
      <NumberInput size="small" placeholder="small" />
      <NumberInput placeholder="default" />
      <NumberInput size="large" placeholder="large" />

      <br />
      <NumberInput size="small" placeholder="小" showStepper />
      <NumberInput placeholder="默认" showStepper />
      <NumberInput size="large" placeholder="大" showStepper />

      <h2>可清空</h2>
      <NumberInput allowClear />
    </div>
  ))
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
    {
      notes: {
        markdown: `
      <Radio.Group value={this.state.value} onChange={this.onChange}>
        <Radio value="小红">小红</Radio>
        <Radio value="小明">小明</Radio>
        <Radio value="小美">小美</Radio>
        <Radio value="小芳">小芳</Radio>
        <Radio value="小黑" disabled>
          小黑
        </Radio>
      </Radio.Group>
      `
      }
    }
  )
  .add("Checkbox 复选框", () => <CheckboxPage />)
  .add("Switch 开关", () => (
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
  .add("Select 选择器", () => (
    <div>
      <h2>基本使用</h2>
      <Select placeholder="请选择">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
      <Select defaultValue="黄瓜" loading>
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
        onPanelVisibleChange={visible => console.log("panel change:", visible)}
      >
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>

      <h2>获得选项的文本</h2>
      <Select
        defaultValue={{ key: "黄瓜" }}
        labelInValue
        onChange={value => console.log(value)}
      >
        <Select.Option value="黄瓜">黄瓜 101</Select.Option>
        <Select.Option value="茄子">茄子 102</Select.Option>
        <Select.Option value="番茄">番茄 103</Select.Option>
      </Select>

      <h2>三种大小</h2>
      <Select placeholder="请选择" size="small">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
      <Select placeholder="请选择">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>
      <Select placeholder="请选择" size="large">
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>

      <h2>可以清空</h2>
      <Select placeholder="请选择" allowClear>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>

      <h2>默认打开</h2>
      <Select placeholder="请选择" visible>
        <Select.Option value="黄瓜">黄瓜</Select.Option>
        <Select.Option value="茄子">茄子</Select.Option>
        <Select.Option value="番茄">番茄</Select.Option>
      </Select>

      <h2>空数据</h2>
      <Select placeholder="请选择" />
    </div>
  ))
  .add("DatePicker 日期选择器", () => (
    <div>
      <Row>
        <Col span={5}>
          <h2>基本使用</h2>
          <DatePicker
            placeholder="请选择"
            onChange={(currentDay, date, dateString) =>
              console.log(currentDay, date, dateString)
            }
          />
        </Col>
        <Col span={5}>
          <h2>禁用</h2>
          <DatePicker placeholder="请选择" disabled />
        </Col>
        <Col span={5}>
          <h2>不显示今天</h2>
          <DatePicker placeholder="请选择" showToday={false} />
        </Col>
        <Col span={5}>
          <h2>默认值</h2>
          <DatePicker defaultValue={moment("1996/09/25", "YYYY/MM/DD")} />
        </Col>
      </Row>

      <Row style={{ margin: "30px 0" }}>
        <Col span={5}>
          <h2>加载中</h2>
          <DatePicker format="YYYY-MM-DD HH:mm:ss" loading />
        </Col>
        <Col span={5}>
          <h2>自定义格式</h2>
          <DatePicker format="YYYY年/MM月/DD天 HH:mm:ss" />
        </Col>
        <Col span={5}>
          <h2>面板改变回调</h2>
          <DatePicker
            onPanelVisibleChange={visible =>
              console.log("visible change", visible)
            }
          />
        </Col>
        <Col span={5}>
          <h2>扩展</h2>
          <DatePicker
            extraFooter={
              <Button type="primary" block>
                黄瓜ui
              </Button>
            }
          />
        </Col>
      </Row>

      <h2>禁用</h2>
      <Row style={{ marginTop: "30px" }}>
        <Col span={5}>
          <h3>只能选今天以后</h3>
          <DatePicker
            disabledDate={currentDate => currentDate < moment().endOf("day")}
          />
        </Col>
        <Col span={5}>
          <h3>禁用所有日期</h3>
          <DatePicker disabledDate={() => true} />
        </Col>
        <Col span={5}>
          <h3>禁用日期范围</h3>
          <DatePicker
            disabledDate={currentDate =>
              !currentDate.isBetween(moment(), moment().add(1, "month"))
            }
          />
        </Col>
      </Row>

      <h2>两个方向</h2>
      <Row style={{ marginTop: "30px" }}>
        <Col span={5}>
          <h3>top</h3>
          <DatePicker position="top" />
        </Col>
        <Col span={5}>
          <h3>bottom</h3>
          <DatePicker position="bottom" />
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col span={5}>
          <h2>自定义加载文案</h2>
          <DatePicker format="YYYY-MM-DD HH:mm:ss" loading tip="加载中..." />
        </Col>
        <Col span={5}>
          <h2>不显示今天和清除按钮</h2>
          <DatePicker showToday={false} allowClear={false} />
        </Col>
        <Col span={5}>
          <h2>不显示上个月的日期</h2>
          <DatePicker showDayInPrevMonth={false} />
        </Col>
        <Col span={5}>
          <h2>不显示下个月的日期</h2>
          <DatePicker showDayInNextMonth={false} />
        </Col>
      </Row>

      <h2>三种大小</h2>
      <Row style={{ marginTop: "30px" }}>
        <DatePicker placeholder="small" size="small" />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <DatePicker placeholder="default" />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <DatePicker placeholder="large" size="large" />
      </Row>
    </div>
  ))
  .add("Upload 上传", () => (
    <div className="upload-page">
      <h2>基本使用</h2>
      <Upload {...uploadProps} accept="image/*">
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>

      <h2>文件大小限制 (10KB)</h2>
      <Upload {...uploadProps} maxSize={10}>
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>

      <h2>上传图片</h2>
      <Upload {...uploadProps} type="image" accept="image/*">
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>

      <h2>上传多个图片</h2>
      <Upload {...uploadProps} type="image" multiple accept="image/*">
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>

      <h2>自定义上传前行为</h2>
      <Upload
        {...uploadProps}
        beforeUpload={file => {
          if (file.name !== "js 从入门到放弃") {
            message.warning("请上传 << js 从入门到放弃 >>");
            return false;
          }
          return true;
        }}
      >
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>

      <h2>点击图片预览</h2>
      <Upload {...uploadProps} type="image" accept="image/*">
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>

      <h2>不显示上传列表</h2>
      <Upload {...uploadProps} showUploadList={false}>
        <Button>
          {" "}
          <FileUploadIcon /> 选择文件{" "}
        </Button>
      </Upload>
    </div>
  ));
// .add(
//   "Form 表单",
//   () => (
//     <>
//       <FormInfo />
//       <h2>基本使用</h2>
//       <Form
//         onSubmit={(values) => console.log(values)}
//       >
//         <Form.Item
//           label="用户名:"
//           name="username"
//           schema={(form) => form.string().required('用户名不能为空')}
//           {...formItemLayout}
//         >
//           <Input placeholder="请输入用户名" />
//         </Form.Item>
//         <Form.Item
//           label="密码:"
//           name="password"
//           schema={(form) => form.string().required('密码不能为空')}
//           {...formItemLayout}
//         >
//           <Input placeholder="请输入密码" type="password" />
//         </Form.Item>
//         <Button htmlType="submit" type="primary" block>提交</Button>
//       </Form>
//     </>
//   )
// )
